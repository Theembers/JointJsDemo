var stencil = {
    groups: {
        controlNodes: {
            label: 'control nodes'
        },
        group1: {
            label: '第一组'
        },
        group2: {
            label: '第二组'
        }
    }
}

var paperMode = {
    size: {
        width: 1000,
        herght: 666
    }
}

var apps = [{
        "name": "file",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:file-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/file"
            }
        }
    },
    {
        "name": "ftp",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:ftp-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/ftp"
            }
        }
    },
    {
        "name": "gemfire",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:gemfire-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/gemfire"
            }
        }
    },
    {
        "name": "gemfire-cq",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:gemfire-cq-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/gemfire-cq"
            }
        }
    },
    {
        "name": "http",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:http-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/http"
            }
        }
    },
    {
        "name": "jdbc",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:jdbc-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/jdbc"
            }
        }
    },
    {
        "name": "jms",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:jms-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/jms"
            }
        }
    },
    {
        "name": "load-generator",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:load-generator-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/load-generator"
            }
        }
    },
    {
        "name": "loggregator",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:loggregator-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/loggregator"
            }
        }
    },
    {
        "name": "mail",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:mail-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/mail"
            }
        }
    },
    {
        "name": "mongodb",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:mongodb-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/mongodb"
            }
        }
    },
    {
        "name": "rabbit",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:rabbit-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/rabbit"
            }
        }
    },
    {
        "name": "s3",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:s3-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/s3"
            }
        }
    },
    {
        "name": "sftp",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:sftp-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/sftp"
            }
        }
    },
    {
        "name": "syslog",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:syslog-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/syslog"
            }
        }
    },
    {
        "name": "tcp",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:tcp-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/tcp"
            }
        }
    },
    {
        "name": "tcp-client",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:tcp-client-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/tcp-client"
            }
        }
    },
    {
        "name": "time",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:time-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/time"
            }
        }
    },
    {
        "name": "trigger",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:trigger-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/trigger"
            }
        }
    },
    {
        "name": "triggertask",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:triggertask-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/triggertask"
            }
        }
    },
    {
        "name": "twitterstream",
        "type": "source",
        "uri": "maven://org.springframework.cloud.stream.app:twitterstream-source-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/source/twitterstream"
            }
        }
    },
    {
        "name": "aggregator",
        "type": "processor",
        "uri": "maven://org.springframework.cloud.stream.app:aggregator-processor-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/processor/aggregator"
            }
        }
    },
    {
        "name": "bridge",
        "type": "processor",
        "uri": "maven://org.springframework.cloud.stream.app:bridge-processor-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/processor/bridge"
            }
        }
    },
    {
        "name": "filter",
        "type": "processor",
        "uri": "maven://org.springframework.cloud.stream.app:filter-processor-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/processor/filter"
            }
        }
    },
    {
        "name": "groovy-filter",
        "type": "processor",
        "uri": "maven://org.springframework.cloud.stream.app:groovy-filter-processor-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/processor/groovy-filter"
            }
        }
    },
    {
        "name": "groovy-transform",
        "type": "processor",
        "uri": "maven://org.springframework.cloud.stream.app:groovy-transform-processor-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/processor/groovy-transform"
            }
        }
    },
    {
        "name": "header-enricher",
        "type": "processor",
        "uri": "maven://org.springframework.cloud.stream.app:header-enricher-processor-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/processor/header-enricher"
            }
        }
    },
    {
        "name": "httpclient",
        "type": "processor",
        "uri": "maven://org.springframework.cloud.stream.app:httpclient-processor-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/processor/httpclient"
            }
        }
    },
    {
        "name": "pmml",
        "type": "processor",
        "uri": "maven://org.springframework.cloud.stream.app:pmml-processor-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/processor/pmml"
            }
        }
    },
    {
        "name": "scriptable-transform",
        "type": "processor",
        "uri": "maven://org.springframework.cloud.stream.app:scriptable-transform-processor-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/processor/scriptable-transform"
            }
        }
    },
    {
        "name": "splitter",
        "type": "processor",
        "uri": "maven://org.springframework.cloud.stream.app:splitter-processor-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/processor/splitter"
            }
        }
    },
    {
        "name": "tasklaunchrequest-transform",
        "type": "processor",
        "uri": "maven://org.springframework.cloud.stream.app:tasklaunchrequest-transform-processor-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/processor/tasklaunchrequest-transform"
            }
        }
    },
    {
        "name": "tcp-client",
        "type": "processor",
        "uri": "maven://org.springframework.cloud.stream.app:tcp-client-processor-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/processor/tcp-client"
            }
        }
    },
    {
        "name": "transform",
        "type": "processor",
        "uri": "maven://org.springframework.cloud.stream.app:transform-processor-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/processor/transform"
            }
        }
    },
    {
        "name": "aggregate-counter",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:aggregate-counter-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/aggregate-counter"
            }
        }
    },
    {
        "name": "cassandra",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:cassandra-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/cassandra"
            }
        }
    },
    {
        "name": "counter",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:counter-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/counter"
            }
        }
    },
    {
        "name": "field-value-counter",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:field-value-counter-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/field-value-counter"
            }
        }
    },
    {
        "name": "file",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:file-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/file"
            }
        }
    },
    {
        "name": "ftp",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:ftp-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/ftp"
            }
        }
    },
    {
        "name": "gemfire",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:gemfire-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/gemfire"
            }
        }
    },
    {
        "name": "gpfdist",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:gpfdist-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/gpfdist"
            }
        }
    },
    {
        "name": "hdfs",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:hdfs-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/hdfs"
            }
        }
    },
    {
        "name": "hdfs-dataset",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:hdfs-dataset-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/hdfs-dataset"
            }
        }
    },
    {
        "name": "jdbc",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:jdbc-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/jdbc"
            }
        }
    },
    {
        "name": "log",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:log-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/log"
            }
        }
    },
    {
        "name": "mongodb",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:mongodb-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/mongodb"
            }
        }
    },
    {
        "name": "pgcopy",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:pgcopy-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/pgcopy"
            }
        }
    },
    {
        "name": "rabbit",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:rabbit-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/rabbit"
            }
        }
    },
    {
        "name": "redis-pubsub",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:redis-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/redis-pubsub"
            }
        }
    },
    {
        "name": "router",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:router-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/router"
            }
        }
    },
    {
        "name": "s3",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:s3-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/s3"
            }
        }
    },
    {
        "name": "sftp",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:sftp-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/sftp"
            }
        }
    },
    {
        "name": "task-launcher-cloudfoundry",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:task-launcher-cloudfoundry-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/task-launcher-cloudfoundry"
            }
        }
    },
    {
        "name": "task-launcher-local",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:task-launcher-local-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/task-launcher-local"
            }
        }
    },
    {
        "name": "task-launcher-yarn",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:task-launcher-yarn-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/task-launcher-yarn"
            }
        }
    },
    {
        "name": "tcp",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:tcp-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/tcp"
            }
        }
    },
    {
        "name": "throughput",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:throughput-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/throughput"
            }
        }
    },
    {
        "name": "websocket",
        "type": "sink",
        "uri": "maven://org.springframework.cloud.stream.app:websocket-sink-kafka-10:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/sink/websocket"
            }
        }
    },
    {
        "name": "TaskTest",
        "type": "task",
        "uri": "http://192.168.10.123/dataflow/dataflow-task-rexec-1.0.0.jar",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/task/TaskTest"
            }
        }
    },
    {
        "name": "composed-task-runner",
        "type": "task",
        "uri": "http://192.168.10.123/dataflow/spring-cloud-starter-task-composedtaskrunner-1.0.8.jar",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/task/composed-task-runner"
            }
        }
    },
    {
        "name": "csv2hive",
        "type": "task",
        "uri": "http://192.168.10.123/dataflow/dataflow-task-csv2hive-1.0.0.jar",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/task/csv2hive"
            }
        }
    },
    {
        "name": "hiveclient",
        "type": "task",
        "uri": "http://192.168.10.123/dataflow/jdrx-spring-dataflow-task-hiveclient-1.0-SNAPSHOT.jar",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/task/hiveclient"
            }
        }
    },
    {
        "name": "jdbchdfs-local",
        "type": "task",
        "uri": "maven://org.springframework.cloud.task.app:jdbchdfs-local-task:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/task/jdbchdfs-local"
            }
        }
    },
    {
        "name": "lexec",
        "type": "task",
        "uri": "http://192.168.10.123/dataflow/dataflow-task-lexec-1.0.1.jar",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/task/lexec"
            }
        }
    },
    {
        "name": "mysql2hive",
        "type": "task",
        "uri": "http://192.168.10.123/dataflow/dataflow-task-mysql2hive-1.0.0.jar",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/task/mysql2hive"
            }
        }
    },
    {
        "name": "mysql2hive-test-20170806",
        "type": "task",
        "uri": "http://192.168.10.123/dataflow/dataflow-task-mysql2hive-test-1.0.0.jar",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/task/mysql2hive-test-20170806"
            }
        }
    },
    {
        "name": "oracle2hive",
        "type": "task",
        "uri": "http://192.168.10.123/dataflow/dataflow-task-oracle2hive-1.0.0.1.jar",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/task/oracle2hive"
            }
        }
    },
    {
        "name": "spark-client",
        "type": "task",
        "uri": "maven://org.springframework.cloud.task.app:spark-client-task:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/task/spark-client"
            }
        }
    },
    {
        "name": "spark-cluster",
        "type": "task",
        "uri": "maven://org.springframework.cloud.task.app:spark-cluster-task:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/task/spark-cluster"
            }
        }
    },
    {
        "name": "spark-yarn",
        "type": "task",
        "uri": "maven://org.springframework.cloud.task.app:spark-yarn-task:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/task/spark-yarn"
            }
        }
    },
    {
        "name": "sshclient-zxb",
        "type": "task",
        "uri": "http://192.168.10.123/dataflow/jdrx-spring-dataflow-task-sshclient-1.0-SNAPSHOT.jar",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/task/sshclient-zxb"
            }
        }
    },
    {
        "name": "timestamp",
        "type": "task",
        "uri": "maven://org.springframework.cloud.task.app:timestamp-task:1.2.0.RELEASE",
        "_links": {
            "self": {
                "href": "http://192.168.10.123:9393/apps/task/timestamp"
            }
        }
    }
]