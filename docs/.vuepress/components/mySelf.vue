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
          kangthomasyan@gmail.com
        </p>
      </div>
      <div class="mySelf-img-groups">
        <h2>RESEARCH GROUPS</h2>
        <div v-for="(item,index) in groups" :key="index+item.name">
          <hr>
          <a :href="item.href" :title="item.name">{{item.name}}</a>
          <br>
        </div>
      </div>
      <div class="mySelf-img-coll">
        <h2>COLLABORATORS</h2>
        <div v-for="(item,index) in coll" :key="index+item.name">
          <img :src="item.src" alt="">
          <b>
            <a :href="item.href" :title="item.name">{{item.name}}</a>
          </b>
        </div>
      </div>
    </div>
    <div class="mySelf-intru">
      <div class="mySelf-intru-name">
        <h2>Kang Yan</h2>
        <h4>Mri</h4>
      </div>
      <hr>
      <div class="mySelf-intru-school">
        <h3>Shanghai Jiaotong University</h3>
      </div>
      <hr>
      <div class="mySelf-intru-article">
        <div v-for="(item,index) in article">{{item.text}}</div>
      </div>
    </div>
    <div class="mySelf-key">
      <h2>KEY PUBLICATIONS</h2>
      <div class="mySelf-key-content">
        <div v-for="(item,index) in keys" :key="index+item.name">
          <a :href="item.href" :title="item.name">{{item.name}}</a>
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
          href:'javascript:;',
          name:'RESEARCH GROUPS1'
        },{
          href:'javascript:;',
          name:'RESEARCH GROUPS2'
        },

      ],
      coll:[
        {
          src:require('../public/img/kang.jpg'),
          href:'javascript:;',
          name:'COLLABORATORS1'
        },
        {
          src:require('../public/img/kang.jpg'),
          href:'javascript:;',
          name:'COLLABORATORS2'
        }
      ],
      article:[
        {
          text:'I develop novel methods for acquiring and reconstructing high-resolution, high-SNR diffusion MRI data from human brain at 3T and 7T. I\'m also actively working on general fast imaging approaches, numerical optimisation and machine learning. '
        },
        {
          text:'One of my projects involves the use of 3D multi-slab EPI sequence for diffusion acquisition, which enables maximised SNR efficiency. I developed methods to reduce slab boundary artefacts (\'NPEN\')  and improve parallel imaging (\'Slice/Slab-FLEET\'). This technique allows high isotropic-resolution diffusion MRI with high contrast and high SNR. Ultra-high field of 7T enables stronger SNR for MRI acquisition. I developed 3D multi-slab diffusion acquisition at 7T, utilising the SNR gain to achieve higher spatial resolution.'
        },
        {
          text:'To reduce diffusion acquisition time, I propose a method (DAGER) to accelerate k-q acquisition using Gaussian processes. Using this method we manage to achieve high in-plane acceleration (R = 6) and high through-plane acceleration (MB = 4, R = 3, R_total = 12) with good image quality.'
        },
        {
          text:'I received a Marie Curie ITN fellowship at Oxford and obtained my DPhil in 2018. I obtained M.Sc degree in Biomedical Engineering from Tsinghua University in Beijing before I joined FMRIB. I worked on spiral imaging, non-Caretesian reconstruction, optimisation methods and multi-shot diffusion imaging for my master thesis.'
        },
        {
          text:'I develop novel methods for acquiring and reconstructing high-resolution, high-SNR diffusion MRI data from human brain at 3T and 7T. I\'m also actively working on general fast imaging approaches, numerical optimisation and machine learning. '
        }
      ],
      keys:[
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        },
        {
          name:'Diffusion Acceleration with Gaussian process Estimated Reconstruction (DAGER)',
          href:'javascript:;',
          periodical:'Journal article',
          timeInfo:'Wu W. et al, (2019), Magnetic Resonance in Medicine, 82, 107 - 125'
        }
      ]
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
        overflow: hidden;
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
      a{
        color:#409EFF;
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
      div{
        overflow: hidden;
        margin-top: 5px;
        img{
        width: 80px;
        height: 80px;
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
       color: #409EFF;
     }
   }
   &-article{
    div{
        margin-bottom: 10px;
        overflow: hidden;
      }
    }
  }
  &-key{
    &-content{
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
