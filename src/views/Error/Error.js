import Navbar from '@/components/Navbar';

export default {
    name: 'Error',
    components: {
      Navbar
    },
    data () {
      return {
        loading: false,
        selection: 1,
      }
    },
    created() {
      this.initialize()
    },
    methods: {
      initialize() {
        
      },
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
}
