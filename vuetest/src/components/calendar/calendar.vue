<template>
  <div class="content">
    <ul class="data-tab">
      <li :class="{'active':depart}" v-tap="{methods:toggleTab}">
        <div class="tab-title">出发日期</div>
        <div class="tab-data">2月17日2017年</div>
      </li>
      <li :class="{'active':!depart}" v-tap="{methods:toggleTab}">
        <div class="tab-title">返回日期</div>
        <div class="tab-data">2月20日2017年</div>
      </li>
    </ul>

    <ul class="week">
      <li>日</li>
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
    </ul>

    <ul class="calendar-list">
      <li v-for="item in calendarList">
        <h3>{{item.title.month}}月
          <small>{{item.title.year}}年</small>
        </h3>
        <ul class="calendar-data-list">
          <li :class="d.class" v-for="d in item.date" v-if="d.class.indexOf('jr')!=-1" :data-date="d.dateStr" v-tap="{methods:changeDate} ">
            <i class="date">{{d.date}}</i>
            <i class="holiday">{{d.holiday}}</i>
          </li>
          <li :class="d.class" v-else :data-date="d.dateStr">
            <i class="date">{{d.date}}</i>
            <i class="holiday">{{d.holiday}}</i>
          </li>
        </ul>
      </li>
      <!-- <li>
        <h3>2月
          <small>2017年</small>
        </h3>
        <ul class="calendar-data-list">
          <li class="ept">
            <i class="date"></i>
            <i class="holiday"></i>
          </li>
          <li class="ept">
            <i class="date"></i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday">端午节</i>
          </li>
          <li class="jr select-s">
            <i class="date">18</i>
            <i class="holiday">端午节</i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
        </ul>
      </li>
      <li>
        <h3>2月
          <small>2017年</small>
        </h3>
        <ul class="calendar-data-list">
          <li class="ept">
            <i class="date"></i>
            <i class="holiday"></i>
          </li>
          <li class="ept">
            <i class="date"></i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="iv">
            <i class="date">18</i>
            <i class="holiday">端午节</i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr select select-e">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
          <li class="jr">
            <i class="date">18</i>
            <i class="holiday"></i>
          </li>
        </ul>
      </li> -->
    </ul>
  </div>
</template>
<script>
const util = {
  /**
   * 根据当前年月，计算下一个月的年月
   * @para year {int} eg: 2014 YYYY
   * @para month {int} eg: 12 MM/M
   * @return {object}
   */
  getNextMonthDate: function(year, month) {
    if (month > 12) {
      year = year + Math.floor((month - 1) / 12);

      if (month % 12 == 0) {
        month = 12;
      } else {
        month = month % 12;
      }
    }

    return {
      year: year,
      month: month
    };
  },

  /**
   * 处理小于10的数字前自动加0
   * @para num {num} int
   * return {string} '02'
   */
  formatNum: function(num) {
    if (num < 10) {
      num = "0" + num;
    }

    return num;
  },

  /**
   * 连接年月日，连接符为`-`
   * return {string} yyyy-mm-dd
   */
  joinDate: function(year, month, day) {
    var formatNum = util.formatNum;

    return year + "-" + formatNum(month) + "-" + formatNum(day);
  },

  /**
   * 将格式化后日期转化为数字，便于日期计算
   * @para date {string|date object} yyyy-mm-dd|日期对象
   * return {string} yyyymmdd
   */
  dateToNum: function(date) {
    var rst = "";
    if (typeof date == "string") {
      rst = date.split("-").join("");
    } else {
      rst = util
        .formatDate(date)
        .split("-")
        .join("");
    }

    return rst;
  },

  /**
   * 格式化日期对象
   * @para {date object} 日期对象
   * return {string} yyyy-mm-dd
   */
  formatDate: function(dateObj) {
    var year = dateObj.getFullYear(),
      month = dateObj.getMonth() + 1,
      day = dateObj.getDate();

    return util.joinDate(year, month, day);
  },

  /**
   * 获取当前日期的下一天
   * @para date {string|date object} yyyy-mm-dd|日期对象
   * @para num {int} 获取指定日期之后的几天
   * return {string} yyyy-mm-dd
   */
  getNextDate: function(date, num) {
    return util.formatDate(new Date(+new Date(date) + num * 86400000));
  },
  /**
   *
   * 获得节日
   */
  getHoliday: function(date) {
    for (let k = 0, hlen = holidaysMap.length; k < hlen; k++) {
      let name = holidaysMap[k]["name"],
        dateArr = holidaysMap[k]["date"];
      for (let j = 0, len = dateArr.length; j < len; j++) {
        let item = dateArr[j];
        if (date == util.dateToNum(item)) {
          return name;
        }
      }
    }
  },
  // 获取元素
  querySelect: function(str, attr) {
    if (!document.querySelector(str)) {
      return null;
    } else {
      return document.querySelector(str)[0].getAttribute(attr);
    }
  },
  //根据传入的日期获得返回日期的后三天
  getReturnDate:function (dateObj){
    var year = dateObj.getFullYear(),
        month = dateObj.getMonth() +1,
        day = dateObj.getDate()+2,
        days=new Date(year,month,0).getDate();
    if(day-days>0){
      return util.joinDate(year, month+1, day%days);
    }else{
      return util.joinDate(year, month, day);
    }
  },
  getDepartDate:function (dateObj){
    var year = dateObj.getFullYear(),
        month = dateObj.getMonth() +1,
        day = dateObj.getDate()-2;
    if(day<0){
      if(util.dateToNum(new Date(year, month-1, new Date(year,month-1,0).getDate()+day)) <= util.dateToNum(util.formatDate(new Date()))){
        return util.formatDate(new Date());
      }else{
        return util.joinDate(year, month-1, new Date(year,month-1,0).getDate()+day);
      }
    }else{
      if(util.dateToNum(new Date(year, month-1, day)) <= util.dateToNum(util.formatDate(new Date()))){
        return util.formatDate(new Date());
      }else{
        return util.joinDate(year, month, day);
      }
    }
  }

};
// 节日
var holidaysMap = [
  {
    name: "", //'今天',
    date: [util.formatDate(new Date())]
  },
  {
    name: "圣诞节",
    date: [
      "2014-12-25",
      "2015-12-25",
      "2016-12-25",
      "2017-12-25",
      "2018-12-25",
      "2019-12-25",
      "2020-12-25"
    ]
  },
  {
    name: "情人节",
    date: [
      "2015-02-14",
      "2016-02-14",
      "2017-02-14",
      "2018-02-14",
      "2019-02-14",
      "2020-02-14"
    ]
  },
  {
    name: "元旦",
    date: [
      "2015-01-01",
      "2016-01-01",
      "2017-01-01",
      "2018-01-01",
      "2019-01-01",
      "2020-01-01"
    ]
  },
  {
    name: "除夕",
    date: [
      "2015-02-18",
      "2016-02-07",
      "2017-01-27",
      "2018-02-15",
      "2019-02-04",
      "2020-01-2"
    ]
  },
  {
    name: "春节",
    date: [
      "2015-02-19",
      "2016-02-08",
      "2017-01-28",
      "2018-02-16",
      "2019-02-05",
      "2020-01-25"
    ]
  },
  {
    name: "元宵节",
    date: [
      "2015-03-05",
      "2016-02-22",
      "2017-02-11",
      "2018-03-02",
      "2019-02-19",
      "2020-02-18"
    ]
  },
  {
    name: "清明节",
    date: [
      "2015-04-05",
      "2016-04-04",
      "2017-04-04",
      "2018-04-05",
      "2019-04-05",
      "2020-04-04"
    ]
  },
  {
    name: "劳动节",
    date: [
      "2015-05-01",
      "2016-05-01",
      "2017-05-01",
      "2018-05-01",
      "2019-05-01",
      "2020-05-01"
    ]
  },
  {
    name: "端午节",
    date: [
      "2015-06-20",
      "2016-06-09",
      "2017-05-30",
      "2018-06-18",
      "2019-06-07",
      "2020-06-25"
    ]
  },
  {
    name: "中秋节",
    date: [
      "2015-09-27",
      "2016-09-15",
      "2017-10-04",
      "2018-09-24",
      "2019-09-13",
      "2020-10-01"
    ]
  },
  {
    name: "国庆节",
    date: [
      "2015-10-01",
      "2016-10-01",
      "2017-10-01",
      "2018-10-01",
      "2019-10-01",
      "2020-10-01"
    ]
  }
];
export default {
  name: "Calendar",
  data() {
    return {
      // 出发标志
      depart: true,
      // 入住标志
      checkIn: true,
    };
  },
  created: function() {
    //设置header标题
    this.$store.commit("changeTitle", "日期");
    this.$store.commit("changeCalendar",{
      title:'wf',
      flag:true,
      dateList:['2018-07-22','2018-07-29']
    });
  },
  computed: {
    calendarList: function() {
      // 获取当前日期并生成未来一年的日期数据

      const step = 13,
            calendarMsg=this.$store.state.defaultMsg;
      let now = new Date(),
          year = now.getFullYear(),
          month = now.getMonth() + 1,
          minDate = util.formatDate(now), 
          maxDate = "",
          dateToNum = util.dateToNum,
          joinDate = util.joinDate,
          calendarlist = [];
      for(let i=0; i<step; i++){
        let curMonth = month + i,
            curDate = util.getNextMonthDate(year, curMonth), //获得下个月的年份和月份,
            dateObj = {
              title: {
                year: curDate.year,
                month: util.formatNum(curDate.month)
              },
              date: []
            },
            firstDay = Math.abs(new Date(curDate.year, curDate.month - 1, 1).getDay()),
            days = new Date(curDate.year, curDate.month, 0).getDate();
        // 根据星期几设置添加几个空li
        for (let d = 0; d < firstDay; d++) {
          dateObj.date.push({
            class: "ept",
            date: "",
            holiday: "",
            dateStr: ""
          });
        }
        for(let n=0; n<days; n++){
          let day = n + 1,
            date = joinDate(curDate.year, curDate.month, day),
            dateNum = dateToNum(date);
          //设置置灰日期
          if (
            (minDate && dateNum < dateToNum(minDate)) ||
            (maxDate && dateNum > dateToNum(maxDate))
          ) {
            dateObj.date.push({
              class: "iv",
              date: util.formatNum(day),
              holiday: util.getHoliday(dateNum),
              dateStr:
                curDate.year +
                "-" +
                util.formatNum(curDate.month) +
                "-" +
                util.formatNum(day)
            })
          }else{

            if(calendarMsg.title=='wf'){
              if(calendarMsg.dateList[0]==(curDate.year + "-" + util.formatNum(curDate.month) + "-" + util.formatNum(day)) && calendarMsg.dateList[1]==(curDate.year + "-" + util.formatNum(curDate.month) + "-" + util.formatNum(day))){
                   dateObj.date.push({
                class: "jr select-s select-e",
                date: util.formatNum(day),
                holiday: '往返',
                dateStr:
                  curDate.year +
                  "-" +
                  util.formatNum(curDate.month) +
                  "-" +
                  util.formatNum(day)
                });
              }else
              // 出发日期样式
              if(calendarMsg.dateList[0]==(curDate.year + "-" + util.formatNum(curDate.month) + "-" + util.formatNum(day))){
                dateObj.date.push({
                class: "jr select-s",
                date: util.formatNum(day),
                holiday: '出发',
                dateStr:
                  curDate.year +
                  "-" +
                  util.formatNum(curDate.month) +
                  "-" +
                  util.formatNum(day)
                });
              }else
              // 返回日期样式
              if(calendarMsg.dateList[1]==(curDate.year + "-" + util.formatNum(curDate.month) + "-" + util.formatNum(day))){
                dateObj.date.push({
                class: "jr select-e",
                date: util.formatNum(day),
                holiday: '返回',
                dateStr:
                  curDate.year +
                  "-" +
                  util.formatNum(curDate.month) +
                  "-" +
                  util.formatNum(day)
                });
              }else 
              //大于出发日期小于返回日期
              if(calendarMsg.dateList[0]<(curDate.year + "-" + util.formatNum(curDate.month) + "-" + util.formatNum(day)) && (curDate.year + "-" + util.formatNum(curDate.month) + "-" + util.formatNum(day))<calendarMsg.dateList[1]){
                dateObj.date.push({
                  class: "jr select",
                  date: util.formatNum(day),
                  holiday: '',
                  dateStr:
                    curDate.year +
                    "-" +
                    util.formatNum(curDate.month) +
                    "-" +
                    util.formatNum(day)
                })
              }else {
                dateObj.date.push({
                  class: "jr",
                  date: util.formatNum(day),
                  holiday: util.getHoliday(dateNum),
                  dateStr:
                    curDate.year +
                    "-" +
                    util.formatNum(curDate.month) +
                    "-" +
                    util.formatNum(day)
                });
              }
            }else if(calendarMsg.title=='rl'){
              if(calendarMsg.dateList[0]==(curDate.year + "-" + util.formatNum(curDate.month) + "-" + util.formatNum(day))&& calendarMsg.dateList[1]==(curDate.year + "-" + util.formatNum(curDate.month) + "-" + util.formatNum(day))){
                   dateObj.date.push({
                class: "jr select-s select-e",
                date: util.formatNum(day),
                holiday: '入离',
                dateStr:
                  curDate.year +
                  "-" +
                  util.formatNum(curDate.month) +
                  "-" +
                  util.formatNum(day)
                });
              }else
              // 出发日期样式
              if(calendarMsg.dateList[0]==(curDate.year + "-" + util.formatNum(curDate.month) + "-" + util.formatNum(day))){
                    dateObj.date.push({
                    class: "jr select-s",
                    date: util.formatNum(day),
                    holiday: '入',
                    dateStr:
                      curDate.year +
                      "-" +
                      util.formatNum(curDate.month) +
                      "-" +
                      util.formatNum(day)
                  });
              }else 
              // 返回日期样式
              if(calendarMsg.dateList[1]==(curDate.year + "-" + util.formatNum(curDate.month) + "-" + util.formatNum(day))){
                    dateObj.date.push({
                    class: "jr select-e",
                    date: util.formatNum(day),
                    holiday: '离',
                    dateStr:
                      curDate.year +
                      "-" +
                      util.formatNum(curDate.month) +
                      "-" +
                      util.formatNum(day)
                  });
              }else  if(calendarMsg.dateList[0]<(curDate.year + "-" + util.formatNum(curDate.month) + "-" + util.formatNum(day)) && (curDate.year + "-" + util.formatNum(curDate.month) + "-" + util.formatNum(day))<calendarMsg.dateList[1]){
                dateObj.date.push({
                  class: "jr select",
                  date: util.formatNum(day),
                  holiday: '',
                  dateStr:
                    curDate.year +
                    "-" +
                    util.formatNum(curDate.month) +
                    "-" +
                    util.formatNum(day)
                })
              }else {
                dateObj.date.push({
                  class: "jr",
                  date: util.formatNum(day),
                  holiday: util.getHoliday(dateNum),
                  dateStr:
                    curDate.year +
                    "-" +
                    util.formatNum(curDate.month) +
                    "-" +
                    util.formatNum(day)
                });
              }
            } 
          }
        }
        calendarlist.push(dateObj);
      }
      return calendarlist;
    }
  },
  methods: {
    //选择日期
    changeDate: function($event) {

      var targetDate = $event.event.currentTarget.dataset.date,
          today = util.formatDate(new Date()),
          firstDate=document.getElementsByClassName('select-s')[0].getAttribute('data-date'),
          secondDate=document.getElementsByClassName('select-e')[0].getAttribute('data-date'),
          calendarMsg=this.$store.state.defaultMsg;
          // 往返
          if(calendarMsg.title=='wf'){
            //出发
            if(calendarMsg.flag){
              if(targetDate<firstDate && targetDate>= today || firstDate<=targetDate && targetDate<=secondDate){
                this.$store.commit("changeCalendar",{
                  title:'wf',
                  flag:false,
                  dateList:[targetDate,secondDate]
                });
              }else{
                this.$store.commit("changeCalendar",{
                  title:'wf',
                  flag:false,
                  dateList:[targetDate,util.getReturnDate(new Date(targetDate.replace(/-/g,'/')))]
                });
              }
            }else{
              if(targetDate<secondDate && targetDate>= firstDate || targetDate>=secondDate){
                this.$store.commit("changeCalendar",{
                  title:'wf',
                  flag:false,
                  dateList:[firstDate,targetDate]
                });
              }else if(today<=targetDate && targetDate<=firstDate){
                this.$store.commit("changeCalendar",{
                  title:'wf',
                  flag:false,
                  dateList:[util.getDepartDate(new Date(targetDate.replace(/-/g,'/'))),targetDate]
                });
              }
            }
          }
          
          console.log(calendarMsg)
    },
    //切换返回日期
    toggleTab: function($event) {
      if ($event.event.currentTarget.className != "active") {
        this.depart = !this.depart;
      }
      console.log(this.depart);
    }
  }
};
</script>
<style scoped lang='less'>
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.content {
  position: absolute;
  left: 0;
  top: 2.2rem;
  right: 0;
  bottom: 0;
  .data-tab {
    display: flex;
    padding: 0 2rem;
    height: 3.05rem;
    li {
      flex: 1;
      text-align: center;
      font-size: 0.75rem;
      &:nth-of-type(1) {
        margin-right: 2.75rem;
      }
      .tab-title {
        padding: 0.55rem 0;
        line-height: 0.75rem;
      }
      .tab-data {
        line-height: 0.6rem;
        font-size: 0.6rem;
        padding-bottom: 0.55rem;
      }
    }
    li.active {
      border-bottom: 0.1rem solid #eb0000;
      .tab-data {
        color: #eb0000;
      }
    }
  }
  .week {
    background-color: #f4f4f4;
    display: flex;
    padding: 0 0.5rem;
    height: 1.6rem;
    align-items: center;
    li {
      flex: 1;
      text-align: center;
      font-size: 0.65rem;
    }
  }
  .calendar-list {
    padding: 0 0.5rem;
    height: calc(~"100vh - 2.2rem - 3.05rem - 1.6rem");
    overflow: hidden;
    overflow-y: auto;
    > li {
      border-bottom: 0.05rem solid #ececec;
      margin: 0 -0.5rem;
    }
    h3 {
      margin: 0;
      font-size: 0.8rem;
      font-weight: 500;
      border-bottom: 0.05rem solid #ececec;
      padding: 0 1.2rem;
      height: 2.25rem;
      line-height: 2.25rem;
      small {
        font-size: 0.6rem;
      }
    }
    .calendar-data-list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 0 0.5rem 0.5rem 0.5rem;
      li {
        width: calc(~"100% / 7");
        line-height: 1.35rem;
        text-align: center;
        border-bottom: 0.05rem dashed #eaeaea;
        padding: 0.5rem 0;
        i {
          display: block;
          font-style: normal;
          &:nth-of-type(1) {
            height: 1.3rem;
            line-height: 1.3rem;
            text-align: center;
            font-size: 0.65rem;
          }
          &:nth-of-type(2) {
            font-size: 0.6rem;
            height: 0.8rem;
            line-height: 0.8rem;
            margin-top: 0.2rem;
          }
        }
      }
      li.iv {
        color: #cccccc;
      }
      li.select {
        position: relative;
        &::after {
          content: "";
          width: 100%;
          height: 1.3rem;
          position: absolute;
          top: 0.5rem;
          left: 0;
          background-color: #f4f4f4;
          z-index: -1;
        }
      }
      li.select-s {
        position: relative;
        i:nth-of-type(1) {
          color: #fff;
        }
        &::after {
          content: "";
          position: absolute;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          background-color: #eb0000;
          top: 0.4rem;
          left: 50%;
          margin-left: -0.7rem;
          z-index: -1;
        }
        &::before {
          content: "";
          width: 50%;
          height: 1.3rem;
          position: absolute;
          top: 0.5rem;
          left: 50%;
          background-color: #f4f4f4;
          z-index: -1;
        }
      }
      li.select-e {
        position: relative;
        i:nth-of-type(1) {
          color: #fff;
        }
        &::after {
          content: "";
          position: absolute;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          background-color: #eb0000;
          top: 0.4rem;
          left: 50%;
          margin-left: -0.7rem;
          z-index: -1;
        }
        &::before {
          content: "";
          width: 50%;
          height: 1.3rem;
          position: absolute;
          top: 0.5rem;
          left: 0;
          background-color: #f4f4f4;
          z-index: -1;
        }
      }
    }
  }
}
</style>
