<template>
  <div class="mySelf">
    <div class="mySelf-img">
      <img src="../public/img/kang.jpg" alt="">
      <div class="mySelf-img-contact">
        <h2>CONTACT INFORMATION</h2>
        <p>
          <b>Email</b>
        </p>
        <p>
          sjtu_yankang@sjtu.edu.cn
        </p>
      </div>
      <div class="mySelf-img-groups">
        <h2>EDUCATIONS</h2>
        <div v-for="(item,index) in groups" :key="index+item.name" class="mySelf-img-groups-item">
          <hr>
            <img :src="item.src" alt="">
            <div>
              <div>{{item.name}}</div>
              <div>{{item.subName}}</div>
            </div>
            <div class="mySelf-img-groups-item-time">{{item.time}}</div>
          <br>
        </div>
      </div>
      <div class="mySelf-img-coll">
        <h2>SUPERVISOR</h2>
        <div v-for="(item,index) in coll" :key="index+item.name">
          <img :src="item.src" alt="">
          <b>
            <a :href="item.href" target="_blank" :title="item.name">{{item.name}}</a>
          </b>
        </div>
      </div>
      <div class="mySelf-img-laboratory">
        <h2>LABORATORY</h2>
        <div>
          <img src="../public/img/lab.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="mySelf-intru">
      <div class="mySelf-intru-name">
        <h2>Kang Yan</h2>
        <h4>MRI Physics, novel pulse sequence development and advanced image reconstruction for fast imaging.</h4>
      </div>
      <hr>
      <div class="mySelf-intru-article">
        <div v-for="(item,index) in article">{{item.text}}</div>
      </div>
      <div class="mySelf-intru-ppt">
        <div class="mySelf-intru-ppt-top">
          <img v-for="(item,index) in ppt.top" :key="item+index" :src="item" alt="">
        </div>
        <div class="mySelf-intru-ppt-bottom">
          <img v-for="(item,index) in ppt.bottom" :key="item+index"  :src="item" alt="">
        </div>
      </div>
    </div>
    <div class="mySelf-key">
      <h2>KEY PUBLICATIONS</h2>
      <div class="mySelf-key-content">
        <div v-for="(item,index) in keys" :key="index+item.name">
          <a :href="item.href" target="_blank" :title="item.name">{{item.name}}</a>
          <br>
          <i>{{item.periodical}}</i>
          <br>
          <span>{{item.timeInfo}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mySelf',
  data () {
    return {
      groups:[
        {
          name:'Shanghai Jiao Tong University',
          subName:'M.A.  Biomedical Engineering',
          time:'Sep,2017 -- Mar,2020',
          src:require('../public/img/school/school2.jpg')
        },{
          name:'Xidian University',
          subName:'B.A.   Biomedical Engineering',
          time:'Sep,2013 -- July,2017',
          src:require('../public/img/school/school1.jpg')
        },

      ],
      coll:[
        {
          src:require('../public/img/du.jpg'),
          href:'http://bme.sjtu.edu.cn/Web/FacultyDetail/31',
          name:'Yiping Du'
        }
      ],
      article:[
        {
          text:'I am a graduate from the School of Biomedical Engineering, Shanghai Jiao Tong University (SJTU), China, where I have been equipped with abundant professional knowledge on MRI Physics, novel pulse sequence development and advanced image reconstruction for fast imaging. '
        },
        {
          text:'When I was trained as M.S. student, my scientific interests focused on fast imaging including the fast reconstruction algorithm and the fast imaging sequence. We firstly paid attention to the Interventional MRI. From the perspective of compressed sensing, interventional images are extremely sparse in the temporal domain. Using the FLASH Radial sequence, we made it possible that in one second we could get 12 frames of image. On the other hand, previously, the background information could be obtained by pre-scan. Therefore, background information and the novel feature are separated during reconstruction. In this way, we gain more details and SNR.'
        },
        {
          text:'Compared to radial sequence, spiral sequence does better in the time efficiency. It is also a motion-insensitive acquisition scheme because the k-space center is repeatedly sampled. Since the spiral protocol is not released as product by our MRI scanner vendor, the United Imaging Healthcare, China (UIH), I wrote the 2D spiral/spiral balanced steady state precession/stack-of-spiral protocol for scientific use. Based on the developed spiral sequence, I employed the de-noise idea of compressed sensing to estimate a smoother B0 mapping for B0 inhomogeneity correction.'
        },
        {
          text:'Now, I work on the development of rosette sequence. The rosette trajectory has many advantages such as spectral response, low noise due to the sine-like gradient waveform, self-gated motion correction and quantification of T1/T2/T2* mapping.'
        }
      ],
      keys:[
        {
          name:'Blanca Zufiria et al. A feature based convolution neural  network(Fb-CNN) for reconstruction of inventional MRI. NMR in Biomedicine 2019 (submitted)',
          href:'https://cds.ismrm.org/protected/19MPresentations/abstracts/2434.html',
          periodical:'Conference paper',
          timeInfo:'Kang Yan et al. A novel feature based image reconstruction for neuro-IMRI. ISMRM 2019.'
        },
        {
          name:'Field Map Estimation in MRI Using Compressed sensing algorithm.  Kang Yan et al. icbbe 2019.',
          href:'https://cds.ismrm.org/protected/19MPresentations/abstracts/4101.html',
          periodical:'Poster Presentations',
          timeInfo:'Shuo Li et al. Dynamic 3D lung MRI using the stack-of-stars sequence with SI navigation. ISMRM 2019'
        }
      ],
      ppt:{
        top:[
          require('../public/img/ppt/1.png'),
          require('../public/img/ppt/2.png'),
        ],
        bottom:[
          require('../public/img/ppt/3.gif'),
          require('../public/img/ppt/4.png'),
          require('../public/img/ppt/5.png')
        ]
      }
    }
  },
  mounted () {
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.mySelf{
  width: 80%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  &>div{
    width: 33.3333333%;
    box-sizing: border-box;
    float: left;
    overflow: hidden;
    padding: 10px;
  }
  &-img{
    &>img{
      width: 100%;
    }
    &-contact{
      box-sizing: border-box;
      width: 100%;
      background: #F2F6FC;
      padding: 10px;
      padding-top: 5px;
      h2{
        font-size: 1.4rem;
        line-height: 1;
      }
      p{
        padding: 0;
        line-height: 1;
        // overflow: hidden;
      }
    }
    &-groups{
      box-sizing: border-box;
      width: 100%;
      background: #F2F6FC;
      padding: 10px;
      padding-top: 5px;
      margin-top: 5px;
      h2{
        border: none;
        font-size: 1.4rem;
        line-height: 1;
        padding: 0;
      }
      &-item{
        overflow: hidden;
        img{
          width: 80px;
          height: 80px;
          float: left;
        }
        &>div{
          overflow: hidden;
          float: left;
          margin-left: 10px;
          margin-top: 10px;
          div{
            margin-top: 5px;
          }
        }
        position: relative;
        .mySelf-img-groups-item-time{
          position: absolute;
          font-size: 14px;
          bottom: 0;
          right: 0
        }
      }
      
    }
    &-coll{
      box-sizing: border-box;
      width: 100%;
      background: #F2F6FC;
      padding: 10px;
      padding-top: 5px;
      margin-top: 5px;
      overflow: hidden;
      h2{
        font-size: 1.4rem;
        line-height: 1;
      }
      div{
        overflow: hidden;
        margin-top: 5px;
        img{
        width: 80px;
        // height: 80px;
        float: left;
        }
        b{
          float: right;
          a{
            color: #409EFF;
          }
        }
      }
      
    }
    &-laboratory{
      box-sizing: border-box;
      width: 100%;
      background: #F2F6FC;
      padding: 10px;
      padding-top: 5px;
      margin-top: 5px;
      overflow: hidden;
      h2{
        font-size: 1.4rem;
        line-height: 1;
      }
      img{
        width: 100%;
      }
    }
  }
  &-intru{
   &-name{
     h2{
       border: none;
       font-size: 1.4rem;
       margin: 0;
     }
     h4{
       margin: 0;
       color: #666666;
     }
   }
   &-article{
    div{
        margin-bottom: 10px;
        overflow: hidden;
      }
    }
    &-ppt{
      overflow: hidden;
      width: 100%;
      border: 1px solid #eaecef;
      &-top{
        overflow: hidden;
        margin: 0 auto;
        img{
          width: 25%;
          margin-left:25%; 
          float: left;
        }
        img:last-child{
          margin: 0;
        }
      }
      &-bottom{
        img{
          width: 25%;
          float: left;
        }
        img:nth-child(2){
          width: 50%;
        }
      }
    }
  }
  &-key{
    &-content{
      div{
        overflow: hidden;
        margin-bottom: 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid #eaecef;
      }
      a{
        color: #409EFF;
        // margin-bottom: 5px;
        display: block;
      }
      i{
        font-style: normal;
        background: #409EFF;
        color: #ffffff;
        padding: 3px 5px;
        margin: 5px 0;
        border-radius: 5px;
        line-height: 1;
        // display: block;
      }
      span{
        font-size: 12px;
        display: block;
        margin-top: 5px;
      }
    }
  }
  
}
</style>
