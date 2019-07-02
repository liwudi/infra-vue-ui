<template>
  <div>
    <InfraUpload
      ref="upload"
      @change="changeEvent"
      preview-position="right"
      :limit="5"
    ></InfraUpload>
    <InfraButton @click="clickEvent">清空files</InfraButton>
    <div style="width: 100%; margin-top: 100px;margin-bottom: 200px;">
      <infra-table
        :table-data="tableData"
        @selection-change="selectionChange"
      >
        <infra-table-col
          label="ID"
          prop="id"
          type="selection"
        ></infra-table-col>
        <infra-table-col
          label="ID"
          prop="id"
        ></infra-table-col>
        <infra-table-col
          label="名单大类"
          prop="classification"
        ></infra-table-col>
        <infra-table-col
          label="名称"
          prop="valueDescription"
        >
        </infra-table-col>
        <infra-table-col
          label="CODE"
          prop="valueCode"
        >
        </infra-table-col>
        <infra-table-col
          label="数据类型"
          prop="dataType"
        >
        </infra-table-col>
        <infra-table-col
          label="操作"
          prop="row"
        >
        </infra-table-col>
        <template slot="row">
          <InfraButton type="default">编辑</InfraButton>
        </template>
        <template slot="save" slot-scope="slotProps">
          <InfraButton>{{slotProps.row.save}}</InfraButton>
        </template>
      </infra-table>
      <infra-pagination
        style="margin-top: 30px;"
        :current-change="change1Event"
        :current-page="1"
        :total="78"
        :page-size="20"
      ></infra-pagination>
    </div>
    <div style="margin-top: 50px; margin-bottom: 50px;">
      <infra-select></infra-select>
    </div>
  </div>
</template>

<script>
  import InfraUpload from '../../../packages/Upload/index';
  import InfraButton from '../../../packages/Button/index';
  import PreviewImage from '../../../packages/PreviewImage/index';
  import InfraTable from '../../../packages/Table/index';
  import infraTableCol from '../../../packages/TableCol/index';
  import InfraPagination from '../../../packages/Pagination/index';
  import InfraSelect from '../../../packages/Select1/index';
  const data = {
    'code': 0,
    'data': {
      'listSourceList': {
        'content': [
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'HZSJ001',
            'id': 469,
            'valueDescription': '58同城筛选',
            'classification': '58同城   ',
            'isMoteLoan': '不是',
            'active_time_interval_mini': 1
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'HZSJ002',
            'id': 470,
            'valueDescription': '58同城车商',
            'classification': '58同城',
            'isMoteLoan': '不是',
            'active_time_interval_mini': 10
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'HZSJ003',
            'id': 471,
            'valueDescription': '融360',
            'classification': '融360',
            'isMoteLoan': '不是'
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'HZSJ009',
            'id': 472,
            'valueDescription': '赶集网筛选',
            'classification': '赶集网',
            'isMoteLoan': '是'
          },
          {
            'visible': 0,
            'dataType': '增量数据',
            'valueCode': 'ZYSJ001',
            'id': 473,
            'valueDescription': '人人贷注册',
            'classification': '人人贷',
            'isMoteLoan': '不是'
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'ZYSJ006',
            'id': 474,
            'valueDescription': '微信',
            'classification': '微信公众号',
            'isMoteLoan': '不是'
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'ZYSJ014',
            'id': 475,
            'valueDescription': '网站数据',
            'classification': '友信网站',
            'isMoteLoan': '是'
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'HZSJ010',
            'id': 493,
            'valueDescription': '百融金服',
            'classification': '百融金服',
            'isMoteLoan': '是'
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'ZYSJ012',
            'id': 494,
            'valueDescription': '友信网站',
            'classification': '友信网站',
            'isMoteLoan': '是'
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'HZSJ026',
            'id': 495,
            'valueDescription': '360度',
            'classification': '360度',
            'isMoteLoan': '是'
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'HZSJ069',
            'id': 496,
            'valueDescription': '灵科新联',
            'classification': '灵科新联',
            'isMoteLoan': '不是',
            'active_time_interval_mini': 30
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'ZYSJ007',
            'id': 497,
            'valueDescription': '微信4周年活动',
            'classification': '微信公众号',
            'isMoteLoan': '是'
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'HZSJ070',
            'id': 498,
            'valueDescription': '众联安信',
            'classification': '众联安信',
            'isMoteLoan': '是'
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'ZYSJ008',
            'id': 499,
            'valueDescription': '微信（公众号）',
            'classification': '微信公众号',
            'isMoteLoan': '是',
            'active_time_interval_mini': 1
          },
          {
            'visible': 0,
            'dataType': '增量数据',
            'valueCode': 'ZYSJ009',
            'id': 500,
            'valueDescription': '微信（H5）',
            'classification': '微信公众号',
            'isMoteLoan': '是'
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'ZYSJ010',
            'id': 1524,
            'valueDescription': '微信_百亿活动',
            'classification': '微信公众号',
            'isMoteLoan': '是'
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'ZYSJ018',
            'id': 1622,
            'valueDescription': '助业贷',
            'classification': '助业贷',
            'isMoteLoan': '是'
          },
          {
            'visible': 1,
            'dataType': '增量数据',
            'valueCode': 'ZYSJ005',
            'id': 1624,
            'valueDescription': 'APP',
            'classification': 'APP',
            'isMoteLoan': '不是'
          },
          {
            'visible': 0,
            'dataType': '增量数据',
            'valueCode': 'ZYSJ015',
            'id': 1625,
            'valueDescription': '网站数据ZT',
            'classification': '友信网站',
            'isMoteLoan': '是'
          },
          {
            'visible': 0,
            'dataType': '增量数据',
            'valueCode': 'HZSJ072',
            'id': 1626,
            'valueDescription': '讯鸟话术1',
            'classification': '新转点',
            'isMoteLoan': '不是'
          }
        ],
        'first': true,
        'last': false,
        'number': 0,
        'numberOfElements': 20,
        'pageable': {
          'offset': 0,
          'pageNumber': 0,
          'pageSize': 20,
          'paged': true,
          'sort': {
            'sorted': false,
            'unsorted': true
          },
          'unpaged': false
        },
        'size': 20,
        'sort': { '$ref': '$.data.listSourceList.pageable.sort' },
        'totalElements': 593,
        'totalPages': 30
      }
    },
    'msg': 'SUCCESS',
    'timestamp': 1560323196
  };
  export default {
    name: 'Upload',
    components: {
      InfraUpload,
      InfraButton,
      InfraTable,
      infraTableCol,
      InfraPagination,
      InfraSelect
    },
    data: function () {
      return {
        tableData: []
      };
    },
    created () {
      setTimeout(() => {
        this.tableData = data.data.listSourceList.content;
      }, 300);
    },
    methods: {
      changeEvent (data) {
        console.log('fileList', data);
      },
      change1Event (data) {
        console.log('val', data);
      },
      selectionChange (val) {
        console.log('选择的是', val);
      },
      clickEvent () {
        this.$refs.upload.clearFiles();
        // PreviewImage.info('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1586712349,1235793970&fm=27&gp=0.jpg');
      }
    }
  };
</script>

<style scoped>

</style>
