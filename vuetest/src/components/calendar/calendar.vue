<template>
  <div class="content">
    <ul class="data-tab">
      <li class="active">
        <div class="tab-title">出发日期</div>
        <div class="tab-data">2月17日2017年</div>
      </li>
      <li>
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
      <li>
        <h3>2月<small>2017年</small>
        </h3>
        <ul class="calendar-data-list">
          <li class="ept"><i class="date"></i><i class="holiday"></i></li>
          <li class="ept"><i class="date"></i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday">端午节</i></li>
          <li class="jr select-s"><i class="date">18</i><i class="holiday">端午节</i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
        </ul>
      </li>
      <li>
        <h3>2月<small>2017年</small>
        </h3>
        <ul class="calendar-data-list">
          <li class="ept"><i class="date"></i><i class="holiday"></i></li>
          <li class="ept"><i class="date"></i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday"></i></li>
          <li class="iv"><i class="date">18</i><i class="holiday">端午节</i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr select select-e"><i class="date">18</i><i class="holiday"></i></li>
          <li class="jr"><i class="date">18</i><i class="holiday"></i></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Calendar',
  data () {
    return {
    }
  },
  created: function () {
    this.$store.commit('changeTitle', '日期')
  }
}
</script>
<style scoped lang='less'>
  ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .content{
    position: absolute;
    left: 0;
    top:2.2rem;
    right:0;
    bottom:0;
    .data-tab{
      display: flex;
      padding:0 2rem;
      li{
        flex: 1;
        text-align: center;
        font-size: 0.75rem;
        &:nth-of-type(1){
          margin-right: 2.75rem;
        }
        .tab-title{
          padding: 0.55rem 0;
          line-height: 0.75rem;
        }
        .tab-data{
          line-height: 0.6rem;
          font-size: 0.6rem;
          padding-bottom: 0.55rem;
        }
      }
      li.active{
        border-bottom: 0.1rem solid #eb0000;
        .tab-data{
          color: #eb0000;
        }
      }
    }
    .week{
      background-color: #f4f4f4;
      display: flex;
      padding: 0 0.5rem;
      height: 1.6rem;
      align-items: center;
      li{
        flex: 1;
        text-align: center;
        font-size: 0.65rem;
      }
    }
    .calendar-list{
      padding:0 0.5rem;
      >li{
        border-bottom: 0.05rem solid #ececec;
        margin: 0 -0.5rem;
      }
      h3{
        margin: 0;
        font-size: 0.8rem;
        font-weight: 500;
        border-bottom: 0.05rem solid #ececec;
        padding: 0 1.2rem;
        height: 2.25rem;
        line-height: 2.25rem;
        small{
          font-size: 0.6rem;
        }
      }
      .calendar-data-list{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding:0 0.5rem;
        li{
          width: calc(~"100% / 7");
          line-height: 1.35rem;
          text-align: center;
          border-bottom:0.05rem dashed #eaeaea;
          padding: 0.5rem 0;
          i{
            display: block;
            font-style: normal;
            &:nth-of-type(1){
              height: 1.3rem;
              line-height: 1.3rem;
              text-align: center;
              font-size: 0.65rem;
            }
            &:nth-of-type(2){
              font-size: 0.6rem;
              height: 0.8rem;
              line-height: 0.8rem;
              margin-top: 0.2rem;
            }
          }
        }
        li.iv{
          color:#cccccc;
        }
        li.select{
          position: relative;
          &::after{
            content: '';
            width:100%;
            height: 1.3rem;
            position: absolute;
            top:0.5rem;
            left: 0;
            background-color: #f4f4f4;
            z-index: -1;
          }
        }
        li.select-s{
          position: relative;
          i:nth-of-type(1){
            color: #fff;
          }
          &::after{
            content: '';
            position: absolute;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            background-color: #eb0000;
            top:0.4rem;
            left: 50%;
            margin-left: -0.7rem;
            z-index: -1;
          }
          &::before{
            content: '';
            width:50%;
            height: 1.3rem;
            position: absolute;
            top:0.5rem;
            left: 50%;
            background-color: #f4f4f4;
            z-index: -1;
          }
        }
        li.select-e{
          position: relative;
          i:nth-of-type(1){
            color: #fff;
          }
          &::after{
            content: '';
            position: absolute;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            background-color: #eb0000;
            top:0.4rem;
            left: 50%;
            margin-left: -0.7rem;
            z-index: -1;
          }
          &::before{
            content: '';
            width:50%;
            height: 1.3rem;
            position: absolute;
            top:0.5rem;
            left: 0;
            background-color: #f4f4f4;
            z-index: -1;
          }
        }
      }
    }
  }
</style>
