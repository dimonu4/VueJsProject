
<script>
import {Doughnut} from 'vue-chartjs'
import {mapGetters} from 'vuex'
// const {reactiveProp} = mixins
export default{
    extends:Doughnut,
    // mixins:[reactiveProp],
    // props:['options'],
    props:{
      sport:{
        type:Number,
      },
      education:{
        type:Number,
      },
      entertaiment:{
        type:Number,
      },
      transport:{
        type:Number,
      },
      food:{
        type:Number,
      },
    },

name:'line-chart',
 data () {
      return {
        chartData: {

          labels: ['Food','Transport','Education','Sport','Entertaiment'],
          datasets: [
            {
              label: 'Costs by categories',
              data: [this.food,	this.transport, this.education,this.sport,this.entertaiment],
              fill: false,
              borderColor: '#2554FF',
              backgroundColor:[
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(4, 182, 83)',
                'rgb(88, 10, 79)'
              ],
              hoverOffset: 4
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    methods:{

    },
    computed:{
    ...mapGetters([
      'getPaymentsList',
    ]),
  
    },
    mounted () {
      this.renderChart(this.chartData, this.options)

    },
  }

</script>