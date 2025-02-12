package role

import (
	"errors"
	v1Role "github.com/KubeOperator/kubepi/internal/model/v1/role"
	"github.com/KubeOperator/kubepi/internal/service/v1/common"
	costomStorm "github.com/KubeOperator/kubepi/pkg/storm"
	"github.com/KubeOperator/kubepi/pkg/util/lang"
	"github.com/asdine/storm/v3/q"
	"github.com/google/uuid"
	"time"
)

type Service interface {
	common.DBService
	Create(r *v1Role.Role, options common.DBOptions) error
	CreateWithTemplate(r *v1Role.Role, templateName string, options common.DBOptions) error
	Get(name string, options common.DBOptions) (*v1Role.Role, error)
	GetByNames(names []string, options common.DBOptions) ([]v1Role.Role, error)
	List(options common.DBOptions) ([]v1Role.Role, error)
	Delete(name string, options common.DBOptions) error
	Update(name string, role *v1Role.Role, options common.DBOptions) error
	Search(num, size int, conditions common.Conditions, options common.DBOptions) ([]v1Role.Role, int, error)
}

func NewService() Service {
	return &service{}
}

type service struct {
	common.DefaultDBService
}

func (s *service) GetByNames(names []string, options common.DBOptions) ([]v1Role.Role, error) {
	db := s.GetDB(options)
	roles := make([]v1Role.Role, 0)
	query := db.Select(q.In("Name", names))
	if err := query.Find(&roles); err != nil {
		return nil, err
	}
	return roles, nil
}

func (s *service) Update(name string, role *v1Role.Role, options common.DBOptions) error {
	db := s.GetDB(options)
	r, err := s.Get(name, options)
	if err != nil {
		return err
	}
	if r.BuiltIn {
		return errors.New("can not delete this resource,because it created by system")
	}
	role.UUID = r.UUID
	role.CreateAt = r.CreateAt
	role.UpdateAt = time.Now()
	return db.Update(role)
}

func (s *service) Create(r *v1Role.Role, options common.DBOptions) error {
	db := s.GetDB(options)
	r.UUID = uuid.New().String()
	r.CreateAt = time.Now()
	r.UpdateAt = time.Now()
	return db.Save(r)
}

func (s *service) CreateWithTemplate(r *v1Role.Role, templateName string, options common.DBOptions) error {
	db := s.GetDB(options)
	var template v1Role.Role
	if err := db.One("Name", templateName, &template); err != nil {
		return err
	}
	r.Rules = template.Rules
	return s.Create(r, options)
}

func (s *service) Get(name string, options common.DBOptions) (*v1Role.Role, error) {
	db := s.GetDB(options)
	var r v1Role.Role
	if err := db.One("Name", name, &r); err != nil {
		return nil, err
	}
	return &r, nil
}

func (s *service) List(options common.DBOptions) ([]v1Role.Role, error) {
	db := s.GetDB(options)

	rs := make([]v1Role.Role, 0)
	if err := db.All(&rs); err != nil {
		return rs, err
	}
	return rs, nil
}

func (s *service) Delete(name string, options common.DBOptions) error {
	db := s.GetDB(options)

	item, err := s.Get(name, options)
	if err != nil {
		return err
	}
	if item.BuiltIn {
		return errors.New("can not delete this resource,because it created by system")
	}
	return db.DeleteStruct(item)
}

func (s *service) Search(num, size int, conditions common.Conditions, options common.DBOptions) ([]v1Role.Role, int, error) {
	db := s.GetDB(options)
	var ms []q.Matcher
	for k := range conditions {
		if conditions[k].Field == "quick" {
			ms = append(ms, costomStorm.Like("Name", conditions[k].Value))
		} else {
			filed := lang.FirstToUpper(conditions[k].Field)
			value := lang.ParseValueType(conditions[k].Value)

			switch conditions[k].Operator {
			case "eq":
				ms = append(ms, q.Eq(filed, value))
			case "ne":
				ms = append(ms, q.Not(q.Eq(filed, value)))
			case "like":
				ms = append(ms, costomStorm.Like(filed, value.(string)))
			case "not like":
				ms = append(ms, q.Not(costomStorm.Like(filed, value.(string))))
			}
		}
	}
	query := db.Select(ms...).OrderBy("CreateAt")
	count, err := query.Count(&v1Role.Role{})
	if err != nil {
		return nil, 0, err
	}
	if size != 0 {
		query.Limit(size).Skip((num - 1) * size)
	}
	roles := make([]v1Role.Role, 0)
	if err := query.Find(&roles); err != nil {
		return nil, 0, err
	}
	return roles, count, nil
}
