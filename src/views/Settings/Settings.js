import Navbar from '@/components/Navbar';

export default {
  name: 'Settings',
  components: {
    Navbar
  },
  data() {
    return {
      snackbar: false,
      snackbar_text: '',
      snackbar_timeout: 2000,
      dialog: false,
      loading_data: true,
      assets_loading: false,
      asset_dialog: false,
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    token_dialog(val) {
      val || this.closeTokenDialog()
    },
  },
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
    },

    
  }
}
