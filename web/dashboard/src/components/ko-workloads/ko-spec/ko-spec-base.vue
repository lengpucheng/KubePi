<template>
  <div>
    <el-form label-position="top" ref="form" :model="form" :disabled="isReadOnly">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item :label="$t('business.workload.restart_strategy')" prop="restartPolicy">
            <ko-form-item v-if="isJobs()" itemType="radio" v-model="form.restartPolicy" :radios="restart_policy_list_job" />
            <ko-form-item v-else itemType="radio" v-model="form.restartPolicy" :radios="restart_policy_list_common" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="$t('business.workload.termination_grace_period')" prop="terminationGracePeriodSeconds">
            <ko-form-item :deviderName="$t('business.workload.seconds')" itemType="number" v-model.number="form.terminationGracePeriodSeconds" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item :label="$t('business.workload.pull_secrets')" prop="imagePullSecrets">
            <ko-form-item itemType="select2" multiple v-model="form.imagePullSecrets" :selections="secret_list" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :label="$t('business.workload.service_account')" prop="serviceAccountName">
            <ko-form-item itemType="select2" v-model="form.serviceAccountName" :selections="service_list" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
          
<script>
import KoFormItem from "@/components/ko-form-item/index"

export default {
  name: "KoSpecBase",
  components: { KoFormItem },
  props: {
    specBaseParentObj: Object,
    serviceList: Array,
    secretList: Array,
    repoList: Array,
    resourceType: String,
    isReadOnly: Boolean,
  },
  watch: {
    serviceList: {
      handler(newName) {
        this.service_list = []
        if (newName) {
          this.service_list = newName
        }
      },
      immediate: true,
    },
    secretList: {
      handler(newName) {
        this.secret_list = []
        if (newName) {
          for (const s of newName) {
            this.secret_list.push(s.metadata.name)
          }
        }
      },
      immediate: true,
    },
    specBaseParentObj: {
      handler(newObj) {
        this.form.imagePullSecrets = []
        if (newObj.imagePullSecrets) {
          for (const sec of newObj.imagePullSecrets) {
            this.form.imagePullSecrets.push(sec.name)
          }
          if (this.specBaseParentObj.restartPolicy) {
            this.form.restartPolicy = this.specBaseParentObj.restartPolicy
          }
          if (this.specBaseParentObj.serviceAccountName) {
            this.form.serviceAccountName = this.specBaseParentObj.serviceAccountName
          }
          if (this.specBaseParentObj.terminationGracePeriodSeconds) {
            this.form.terminationGracePeriodSeconds = this.specBaseParentObj.terminationGracePeriodSeconds
          }
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      form: {
        restartPolicy: "",
        imagePullSecrets: [],
        serviceAccountName: "",
        terminationGracePeriodSeconds: "",
      },
      restart_policy_list_common: [
        { label: "Always", value: "Always" },
        { label: "OnFailure", value: "OnFailure" },
        { label: "Never", value: "Never" },
      ],
      restart_policy_list_job: [
        { label: "OnFailure", value: "OnFailure" },
        { label: "Never", value: "Never" },
      ],
      service_list: [],
      secret_list: [],
    }
  },
  methods: {
    isJobs() {
      if (this.resourceType === "jobs" || this.resourceType === "cronjobs") {
        this.form.restartPolicy = "OnFailure"
        return true
      }
      this.form.restartPolicy = "Always"
      return false
    },
    transformation(parentFrom, metadata) {
      parentFrom.restartPolicy = this.form.restartPolicy || undefined
      parentFrom.serviceAccountName = this.form.serviceAccountName || undefined
      parentFrom.terminationGracePeriodSeconds = this.form.terminationGracePeriodSeconds || undefined

      let imagePullSecrets = []
      for (const item of this.form.imagePullSecrets) {
        imagePullSecrets.push({ name: item })
      }
      if (!metadata.labels) {
        parentFrom.imagePullSecrets = imagePullSecrets.length !== 0 ? imagePullSecrets : undefined
        return
      }
      for (const key in metadata.labels) {
        if (key.indexOf("kubepi-repo-") !== -1) {
          let secretName = "kubepi-" + metadata.labels[key] + "-secret"
          if (!this.existSecret(secretName, imagePullSecrets)) {
            imagePullSecrets.push({ name: secretName })
          }
        }
      }
      parentFrom.imagePullSecrets = imagePullSecrets.length !== 0 ? imagePullSecrets : undefined
      return
    },
    existSecret(secretName, imagePullSecrets) {
      if (imagePullSecrets.length === 0) {
        return false
      }
      for (const sec of imagePullSecrets) {
        if (sec.name === secretName) {
          return true
        }
      }
      return false
    },
  },
}
</script>