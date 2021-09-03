import el from "element-ui/lib/locale/lang/zh-CN" // 加载element的内容
import fu from "fit2cloud-ui/src/locale/lang/zh-CN" // 加载fit2cloud的内容


const message = {
  commons: {
    message_box: {
      alert: "警告",
      confirm: "确认",
      prompt: "提示",
    },
    personal: {
      exit: "退出"
    },
    button: {
      delete: "删除",
      import: "导入",
      create: "创建",
      cancel: "取消",
      login: "登录",
      confirm: "确定",
      yaml: "YAML",
      back_form: "返回表单",
      add: "添加",
      edit: "编辑",
      edit_yaml: "编辑 YAML",
      search: "搜索",
      upload: "从文件读取",
      view_form: "查看表单",
      view_yaml: "查看 YAML",
      download_yaml: "下载 YAML",
      open_shell: "打开 SHELL",
      back_detail: "返回详情",
      submit: "提交",
      show_diff: "差异对比",
      continue_edit: "继续编辑",
      terminal: "终端",
      logs: "日志",
      scale: "伸缩",
      restart: "重启",
      modifying_version: "修改镜像版本",
    },
    table: {
      name: "名称",
      created_time: "创建时间",
      status: "状态",
      action: "操作",
      creat_by: "创建者",
      time: "时间",
      message: "消息",
      lastUpdateTime: "更新时间",
      type: "类型",
      resourceInformation: "资源信息",
      empty_text: "没有内容显示",
    },
    status: {
      Running: "运行中",
      Succeeded: "成功",
      Failed: "失败",
      Warninng: "警告",
      Pending: "等待"
    },
    search: {
      quickSearch: "搜索"
    },
    form: {
      name: "名称",
      detail: "详情",
      setting: "设置",
      parameters: "参数"
    },
    validate: {
      limit: "长度在 {0} 到 {1} 个字符",
      input: "请输入{0}",
      select: "请选择{0}",
      required_input_msg: "输入项不能为空",
      required_select_msg: "选择项不能为空",
      number_limit: "请输入正确的数字",
      name_rules: "仅支持小写英文、数字和-",
      params_not_complete: "参数不完整",
    },
    msg: {
      operation_success: "操作成功",
      delete_success: "删除成功",
      create_success: "创建成功",
      update_success: "修改成功",
    },
    confirm_message: {
      delete: "此操作不可撤销, 是否继续?",
      back_form: "返回表单编辑不会保留对 YAML 做出的所有更改",
      open_yaml: "，仍要打开 YAML 编辑？",
    },
    login: {
      username: "用户名",
      password: "密码",
      title: "登录 EKKO",
      welcome: "欢迎回来，请输入用户名和密码登录",
      expires: "认证信息已过期，请重新登录",
      table: {
        name: "名称",
        created_time: "创建时间"
      },
      search: {
        quickSearch: "搜索"
      },
      form: {
        name: "名称"
      }
    },
  },
  business: {
    common: {
      label: "标签",
      annotation: "注释",
      basic: "基本信息",
      expand: "展开",
      pack_up: "收起",
      system: "系统信息",
      config: "配置信息",
      resource: "资源信息",
      conditions: "状态"
    },
    dashboard: {
      dashboard: "概览"
    },
    cluster: {
      cluster: "集群",
      version: "版本",
      list: "集群列表",
      import: "导入集群",
      nodes: "节点",
      api_server_help: "例如: https://172.16.10.100:8443",
      router_help: "装有 kube-proxy 的任意节点的且可以被访问到的 IP 地址",
      label: "标签",
      description: "描述"
    },
    event: {
      event: "事件",
      reason: "原因",
      type: "类型",
      time: "时间",
      resource: "对象",
      message: "消息"
    },
    node: {
      ready: "准备就绪",
      role: "角色",
      os: "操作系统",
      arch: "系统架构",
      osImage: "操作系统镜像",
      kernel: "操作系统内核",
      container: "容器 runtime 版本",
      kubelet_version: "kubelet 版本",
      kubeProxy_version: "kubeProxy 版本",
      allocation: "分配"
    },
    pod: {
      image: "镜像",
      ready: "准备就绪",
      restart: "重启",
      type: "类别",
      reason: "原因",
      message: "信息",
      lastHeartbeatTime: "最后检测时间",
      lastTransitionTime: "最后迁移时间",
      lastUpdateTime: "最后更新时间",
      size: "大小",
      resource: "资源信息",
      address: "地址",
      watch: "监听",
      lines: "行数",
      last_20_lines: "最后20行",
      last_100_lines: "最后100行",
      last_200_lines: "最后200行",
      last_500_lines: "最后500行",
    },
    namespace: {
      namespace: "命名空间",
      description: "描述"
    },
    workload: {
      workload: "工作负载",
      replicas: "副本数",
      container: "容器",
      container_type: "容器类型",
      current_version: "当前版本",
      new_version: "新版本",
      initContainer: "初始化容器",
      standardContainer: "标准容器",
      schedule: "调度",
      lastScheduleTime: "最后的调度",
      suspend: "暂停",
      duration: "耗时",
      lastTransitionTime: "最后更新时间",
      restarts: "重启",
      current: "当前调度",
      desired: "期望期望",

      general: "基础信息",
      volume_claim_template: "存储卷声明模版",
      volume: "数据卷(Volume)",
      spec: "运行容器组",
      container_name: "容器名称",
      container_image: "容器镜像",
      pull_policy: "拉取策略",
      pull_secrets: "拉取密钥",

      port: "端口映射",
      service_type: "服务类型",
      not_create: "不创建服务",
      cluster_ip: "集群 IP",
      node_port: "节点端口",
      load_balancer: "负载均衡",
      name: "名称",
      private_port: "容器端口",
      protocol: "协议",
      expose: "暴露",
      public_port: "外部端口",
      listening_port: "监听端口",
      host_ip: "主机IP",

      command: "命令",
      commands: "命令(CMD)",
      arguments: "参数(Args)",
      working_dir: "工作目录",
      once: "仅一次",
      type: "类型",
      stdin: "标准输入",
      environment_variable: "环境变量",
      prefix_variable: "内容(prefix/variable)",
      source: "来源",
      value: "值",
      variable: "环境变量",

      health_check: "健康检查",
      readiness_check: "就绪检查",
      liveness_check: "存活检查",
      startup_check: "启动检查",
      check_type: "检查类型",
      none: "无",
      http_option: "HTTP 请求返回成功状态（200-399）",
      https_option: "HTTPS 请求返回成功状态（200-399）",
      tcp_option: "TCP 连接正常",
      cmd_option: "容器内部命令运行正常",
      check_interval: "检查间隔",
      initial_delay: "初始延时",
      timeout: "超时时间",
      seccess_threshold: "成功阈值",
      failure_threshold: "失败阈值",
      header: "请求头",
      check_port: "检查端口",
      check_path: "请求路径",
      check_cmd: "检查命令",

      labels_annotations: "标签/注释",
      label: "标签",
      annotations: "注释",
      key: "键",
      selector: "选择器",
      edit_option: "编辑选项",
      edit: "修改",
      notice: "请注意：",
      recreate_tips: "在创建后不允许修改，所以此操作实际是先删后创建，您的应用程序在此期间将会不可用",

      network: "网络",
      add: "添加",
      network_mode: "网络模式",
      normal: "集群网络",
      host_network: "主机网络",
      dns_policy: "DNS 策略",
      hostname: "主机名",
      sub_domain: "域名",
      nameservers: "服务器地址",
      searches: "搜索域",
      dns_resolver: "DNS 解析",
      host_aliases: "主机别名",

      affinity: "亲和性",
      anti_affinity: "反亲和性",
      priority: "优先级",
      preferred: "优先",
      required: "必须",
      namespace_operation: "Namespace 选项",
      this_namespace: "当前 Namespace",
      these_namespace: "以下 Namespace",
      operator: "运算符",
      topology_key: "拓扑键",
      node_selector: "节点选择器",
      match_expressions: "表达式",
      match_labels: "标签选择",

      node_schedule: "节点调度",
      schedule_type: "调度类型",
      any_node: "任意可用节点",
      specific_node: "指定节点",
      match_rules: "调度规则匹配",
      weight: "权重",
      rule: "规则",
      node_name: "节点名称",

      toleration: "容忍",
      effect: "影响",
      all: "所有",
      no_schedule: "不调度",
      prefer_no_schedule: "倾向于不调度",
      no_execute: "不执行",
      toleration_seconds: "容忍时间(秒)",
      seconds: "秒",
      times: "次",

      resource: "资源",
      reservation: "预留",
      memory: "内存",
      limit: "限制",

      upgrade_policy: "扩缩容/升级策略",
      strategy: "策略",
      restart_strategy: "重启策略",
      rolling_update: "滚动升级，先创建，后停止",
      recreate: "先杀死所有POD，再启用新的",
      max_surge: "最大 Pod 数量",
      max_unavaliable: "最大不可用数量",
      min_ready_time: "最小就绪时间",
      revision_history_limit: "修订历史记录限制",
      revision: "版本",
      progress_deadline: "进程截止时间",
      termination_grace_period: "终止宽限期",
      concurrency: "并发策略",
      allow_run: "允许多个 CronJobs 同时运行",
      skip_if_not_finish: "如果当前 Job 没结束，则跳过",
      replace_if_not_finish: "如果当前 Job 没结束，则替换运行",
      completions: "完成次数",
      parallelism: "并发数",
      back_off_limit: "重试次数",
      active_deadline: "活跃终止时间",
      successful_job_history_limit: "历史成功累计",
      failed_job_history_limit: "历史失败累计",
      starting_deadline_seconds: "运行 job 截止时间",
      pod_active_deadline: "pod 存活判定截止时间",
      pod_manage_policy: "pod 管理策略",

      security_context: "安全",
      privileged: "特权模式",
      no: "否",
      full_access: "是，容器拥有访问主机全部权限",
      gain_more_privileges: "是，容器可以获取比其父进程更多的权限",
      non_root: "是，容器必须以非 root 用户的身份",
      filesystem_read_only: "是，容器有一个只读的文件系统",
      privilege_escalation: "允许权限提升",
      run_as_non_root: "是否以 root 方式运行",
      read_only_root_filesystem: "只读 root 文件系统",
      run_as_user_id: "以用户 ID 运行",
      add_capabilities: "增加权限",
      drop_capabilities: "弃用权限",

      storage: "存储",
      yes: "是",
      pvc: "持久卷",
      volume_name: "卷名称",
      volume_mount: "挂载卷",
      mount: "挂载点",
      default_mode: "默认模式",
      optional: "可选",
      mount_point: "挂载路径",
      sub_path_in_volume: "卷内子路径",
      read_only: "只读",

      pv_name: "持久卷名称",
      new_pv: "使用存储类创建新的持久卷(PVC)",
      existing_pv: "使用已有的持久卷(PV)",
      storage_class: "存储类",
      size: "容量",
      access_modes: "访问模式",
      single_read_write: "单节点读写",
      many_read_only: "多节点只读",
      many_read_write: "多节点读写",
    },
    network: {
      service_discovery: "服务发现",
      network: "网络",
      protocol: "协议",
      port: "端口",
      rule: "规则",
      host: "主机",
      path: "路径",
      path_type: "路径类型",
      service_name: "Service 名称",
      service_port: "Service 端口",
      target: "目标",
      pod_selector: "Pod 选择器",
      port_name: "端口名称",
      listening_port: "监听端口",
      target_port: "目标端口",
      ip_address: "IP 地址",
      external_ip: "外部IP",
      selector: "选择器",
      default_backend: "默认后端",
      verbs: "动作",
      non_resource_url: "非资源URL",
      api_group: "API 组"
    },
    storage: {
      provisioner: "提供商",
      path_or_node: "路径或节点",
      storage: "存储",
      accessModes: "访问模式",
      capacity: "容量 Gib",
      reclaimPolicy: "回收策略",
      storageClass: "存储类",
      volumeBindingMode: "卷绑定模式",
      claim: "要求",
      pvSource: "VolumeClaim Source",
      assignSc: "绑定 StorageClass",
      assignPv: "绑定 PersistentVolume",
      DirectoryOrCreateLabel: "DirectoryOrCreate: 如果路径不存在则创建空目录，默认权限为0755 ",
      DirectoryLabel: "Directory: 路径必须存在",
      FileOrCreateLabel: "FileOrCreate: 如果路径上什么都不存在，则创建空文件，默认权限为：0644",
      FileLabel: "File: 路径上必须存在的文件 ",
      SocketLabel: "Socket: 路径上必须存在的 UNIX 套接字 ",
      CharDeviceLabel: "CharDevice: 路径上必须存在的字符设备 ",
      BlockDeviceLabel: "BlockDevice: 路径上必须存在的块设备，例: /dev/sda1 ",
    },
    configuration: {
      configuration: "配置",
      data: "数据",
      no_data: "没有数据可显示",
      type: "类型",
      basic_auth: "基本身份认证",
      ssh_auth: "SSH 身份认证",
      tls_auth: "TLS",
      token_auth: "令牌",
      cluster_ip: "集群 IP",
      selector: "选择",
      registry_domain_name: "注册域名",
      username: "用户名",
      password: "密码",
      authentication: "基本身份认证",
      certificate: "证书",
      publicKey: "公钥",
      privateKey: "私钥",
      target: "目标",
      metrics: "指标",
      min_replicas: "最小副本数",
      max_replicas: "最大副本数",
      current_replicas: "当前副本数",
      target_reference: "目标引用",
      source: "来源",
      resource_name: "资源名称",
      quantity: "数量",
      metrics_name: "指标名称",
      metrics_selector: "指标选择器",
      api_version: "API 版本",
      kind: "类型",
      name: "名称"
    },
    access_control: {
      access_control: "访问控制",
      resource_helper: "多个项目请用,分隔",
      object: "对象",
      ref: "关联",
      role: "角色",
      authorized: "授权",
      api_group: "API 组"
    },
    custom_resource: {
      custom_resource: "自定义资源",
      full_name: "全名",
      namespaced: "有命名空间的",
      version: "版本",
      scope: "范围",
      names: "允许的名称",
      singular: "单数",
      plural: "复数",
      served: "服务",
      storage: "存储",
      status: "状态"
    },
    user: {
      user_management: "用户与权限",
      user_group: "用户组",
      nickname: "昵称",
      email: "邮箱",
      user_list: "用户列表",
      user_group_list: "用户组列表",
      role_list: "角色列表",
      user: "用户",
      role: "角色",
    }
  },
}


export default {
  ...el,
  ...fu,
  ...message
}
