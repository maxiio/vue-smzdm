<template>
  <div>
    <ul class="card-group-ul">
        <li class="card-group-list" @click="selectCard(item)" v-for="(item, index) in cardList" :key="index" :timesort="item.timesort ? item.timesort : item.time_sort" :channelId="item.article_channel_id">
          <div class="zm-card">
            <div class="zm-card-media">
              <img v-lazy="replacePic(item.article_pic)" alt="">
              <div :class="cardLabel(item.article_channel_class)" v-show="item.article_channel_class">{{item.article_channel}}</div>
            </div>
            <div class="zm-card-content">
              <div class="zm-card-title">{{item.article_title}}</div>
              <div class="card-price">{{item.article_price}}</div>
              <div class="zm-card-actions">
                <div class="zm-card-actions-left">
                  <span class="card-btm-user-info" v-show="showBtm()">
                    <img v-lazy="replaceAvatar(item.article_avatar)">
                    <span v-show="item.article_referrals">{{item.article_referrals}}</span>
                  </span>
                  <span v-show="!showBtm()">
                    <span class="card-mall">{{item.article_mall}}</span>
                    <span>{{item.article_format_date}}</span>
                  </span>
                </div>
                <div class="zm-card-actions-right">
                  <span class="icon-group">
                    <i class="iconfont icon-comment"></i>{{item.article_comment}}
                  </span>
                  <span class="icon-group" v-show="!showBtm()">
                    <i class="iconfont icon-chongzhijilu"></i>{{item.article_worthy}}
                  </span>
                  <span class="icon-group" v-show="showBtm()">
                    <i class="iconfont icon-shoucang" v-show="item.article_collection"></i>{{item.article_collection}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    cardList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    
  },
  created () {
    
  },
  methods: {
    showBtm () {
      return this.$route.name === 'post' ? true : false
    },
    replacePic (pic) {
      if(pic && pic != ''){
        if(pic.indexOf('https:')>-1) pic = pic.replace('https:','http:')
        if(pic.indexOf('tp-qna.smzdm.com')>-1) pic = pic.replace('tp-qna.smzdm.com','localhost:8080/tpQna')
        if(pic.indexOf('tp-y.zdmimg.com')>-1) pic = pic.replace('tp-y.zdmimg.com','localhost:8080/tpY')
        if(pic.indexOf('tp-qny.smzdm.com')>-1) pic = pic.replace('tp-qny.smzdm.com','localhost:8080/tpQny')
        if(pic.indexOf('qny.smzdm.com')>-1) pic = pic.replace('qny.smzdm.com','localhost:8080/qnY')
        if(pic.indexOf('y.zdmimg.com')>-1) pic = pic.replace('y.zdmimg.com','localhost:8080/y')
        if(pic.indexOf('tp-qnam.smzdm.com')>-1) pic = pic.replace('tp-qnam.smzdm.com','localhost:8080/tpQnam')
        if(pic.indexOf('a.zdmimg.com')>-1) pic = pic.replace('a.zdmimg.com','localhost:8080/a')
        if(pic.indexOf('qna.smzdm.com')>-1) pic = pic.replace('qna.smzdm.com','localhost:8080/Qna')
        return pic
      }else{
        return ''
      }
    },
    replaceAvatar (pic) {
      if(pic && pic != ''){
        if(pic.indexOf('https:')>-1) pic = pic.replace('https:','http:')
        if(pic.indexOf('avatarimg.smzdm.com')>-1) pic = pic.replace('avatarimg.smzdm.com','localhost:8080/avatarImg')
        return pic
      }else{
        return ''
      }
    },
    selectCard (item) {
      if(item.gtm && item.gtm != 'undefined'){
        var channel = item.gtm.channel_dimension
        // console.log(channel)
        this.$router.push({
          path: `/${channel}/${item.article_id}`
        })
        // vuex
        this.setGoods(item)
      }else{
        console.log(item)
        console.log('数据不完整，无法显示！');
      }
    },
    cardLabel (label) {
      return (label!=null) ? `card-label ${label.replace('z-tag-','card-label-')}` : ''
    },
    ...mapMutations({
      setGoods: 'SET_GOODS'
    })
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import '~assets/scss/variable'
  @import '~assets/css/iconfont'

  .card-group-ul
    background-color: $bg-common
    li.card-group-list
      -webkit-tap-highlight-color: rgba(255,255,255,.35)
      -webkit-touch-callout: none
      color: #333
      .zm-card
        margin: 0 0 10px
        padding: 15px 10px
        background-color: #fff
        &,.zm-card-media
          display: -webkit-box
          display: -webkit-flex
          display: -ms-flexbox
          display: flex
        .zm-card-media
          position: relative
          min-width: 105px
          align-items: center
          justify-content: center
          width: 105px
          height: 105px
          border-radius: 2px
          overflow: hidden
          margin-right: 10px
          img
            max-height: 100%
            max-width: 100%
          .card-label
            position: absolute
            top: 0
            left: 0
            padding-left: 8px
            padding-right: 8px
            line-height: 15px
            border-radius: 2px
            height: 15px
            max-width: 84px
            font-size: 11px
            color: #fff
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
            text-align: left
            &.card-label-guonei
              background-color: rgba(240,72,72,.8)
            &.card-label-haitao
              background-color: rgba(0,0,0,.8)
        .zm-card-content
          overflow: hidden
          display: flex
          flex: 1
          -webkit-box-orient: horizontal
          -webkit-box-direction: normal
          flex-flow: row wrap
          align-content: space-between
          min-height: 68px
          .zm-card-mintitle,.zm-card-title
            font-size: 15px
            line-height: 24px
            height: 48px
            overflow: hidden
            margin-bottom: 1px
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-line-clamp: 2
            -webkit-box-orient: vertical
            font-weight: 700
          &>div
            width: 100%
          .card-price
            color: #f04848
            font-size: 15px
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
          .zm-card-actions
            color: #888
            font-size: 12px
            align-items: center
            display: flex
            width: 100%
            justify-content: space-between
            .zm-card-actions-left
              overflow: hidden
              .card-btm-user-info
                line-height: 22px
                img
                  width: 22px
                  height: 22px
                  margin-right: 7px
                  border-radius: 50%
                  vertical-align: middle
              &>span
                display: flex
                white-space: nowrap
                span
                  display: inline-block
                  height: 13px
                  line-height: 13px
                  vertical-align: middle
                  &:first-child
                    overflow: hidden
                    text-overflow: ellipsis
                    white-space: nowrap
                  &+span
                    padding-left: 6px
                    margin-left: 6px
                    border-left: 1px solid #888
            .zm-card-actions-right
              text-align: right
              white-space: nowrap
              margin-left: 20px
              .icon-group
                margin-left: 17px
                &:first-child
                  margin-left: 0
                i
                  margin-right: 4px
                  font-size: 12px
            span
              white-space: nowrap
</style>
