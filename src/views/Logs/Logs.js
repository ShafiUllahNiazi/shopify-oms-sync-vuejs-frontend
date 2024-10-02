// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar';

export default {
  name: 'Logs',
  components: {
    Navbar
  },
  data () {
    return {
      search: '',
      limit_filter: 50,
      searchDebounce: null,
      loading_data: true,
      logs: [],
      next_page_url: '',
      previous_page_url: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 50,
      perPageOptions: [5, 10, 50, 100, 150, 200, 250],
      selected: [],
      snackbar: false,
      snackbar_text: '',
      snackbar_timeout: 2000,
      columns: [
        { text: 'Sync', value: 'sync_type', show: true },
        { text: 'SKU', value: 'sku', show: true },
        { text: 'Message', value: 'message', show: true },
        { text: 'Created', value: 'created_at', show: true },
        { text: 'Updated', value: 'updated_at', show: true }
      ],
      headers: [
        { text: 'Sync', value: 'sync_type', show: true },
        { text: 'SKU', value: 'sku', show: true },
        { text: 'Message', value: 'message', show: true },
        { text: 'Created', value: 'created_at', show: true },
        { text: 'Updated', value: 'updated_at', show: true }
      ],
    }
  },
  created() {
    this.initialize()
  },
  mounted() {
  },
  watch: {
  },
  methods: {
    // Initialize Funcation
    initialize() {
      this.getLogs()
    },

    // Get logs
    getLogs() {
      debugger
      this.loading_data = true;
      this.$Axios.get(this.$backendURL + "/oms/logs?shop=" + this.$shop + "&limit=" + this.limit_filter, {
        headers: {
          'Authorization': this.$API_TOKEN.replace('%20', ' ')
        }
      }).then((response) => {
        this.logs = response.data.results;
        this.loading_data = false;
        this.next_page_url = response.data.next;
        this.previous_page_url = response.data.previous;
      }, (error) => {
        if (error.response.data.detail == "Session expired, Reopen the application!") {
          this.$router.push('/error')
        }
      });
    },

    // Get Next Page logs
    getNextPageLogs() {
      if (this.next_page_url !== false) {
        this.loading_data = true;
        this.$Axios.get(this.next_page_url, {
          headers: {
            'Authorization': this.$API_TOKEN.replace('%20', ' ')
          }
        }).then((response) => {
          this.logs = response.data.results
          this.loading_data = false;
          this.next_page_url = response.data.next;
          this.previous_page_url = response.data.previous;
        }, (error) => {
          if (error.response.data.detail == "Session expired, Reopen the application!") {
            this.$router.push('/error')
          }
        });
      } else {
        console.log("You have reached last page");
      }
    },

    // Get Previous Page logs
    getPreviousPageLogs() {
      if (this.previous_page_url !== false) {
        this.loading_data = true;
        this.$Axios.get(this.previous_page_url, {
          headers: {
            'Authorization': this.$API_TOKEN.replace('%20', ' ')
          }
        }).then((response) => {
          this.logs = response.data.results
          this.loading_data = false;
          this.next_page_url = response.data.next;
          this.previous_page_url = response.data.previous;
        }, (error) => {
          if (error.response.data.detail == "Session expired, Reopen the application!") {
            this.$router.push('/error')
          }
        });
        
      } else {
        console.log("You have reached first page");
      }
    },

    // Filter Handling
    searchLogs(search) {
			// eslint-disable-next-line
        
      
      this.loading_data = true;
      this.$Axios.get(this.$backendURL + "/oms/logs?shop=" + this.$shop + "&search=" + search, {
        headers: {
          'Authorization': this.$API_TOKEN.replace('%20', ' ')
        }
      }).then((response) => {
        this.logs = response.data.results;
        this.loading_data = false;
        this.next_page_url = response.data.next;
        this.previous_page_url = response.data.previous;
      }, (error) => {
        console.log(error);
      });
  },

    
    // Search Function
    search_function (event) {
      debugger

      var context = this;
      context.searchDebounce = setTimeout(() => {
				this.searchLogs(event)
      }, 1000);
    },

    syncInventory() {
      this.loading_data = true;
      this.$Axios.get(this.$backendURL + "/oms/inventory_sync?shop=" + this.$shop, {
        headers: {
          'Authorization': this.$API_TOKEN.replace('%20', ' ')
        }
      }).then((response) => {
        this.loading_data = false;
        this.snackbar_text = response.data
        this.snackbar = true
      }, (error) => {
        console.log(error);
      });
    },

    syncPrice() {
      this.loading_data = true;
      this.$Axios.get(this.$backendURL + "/oms/price_sync?shop=" + this.$shop, {
        headers: {
          'Authorization': this.$API_TOKEN.replace('%20', ' ')
        }
      }).then((response) => {
        this.loading_data = false;
        this.snackbar_text = response.data
        this.snackbar = true
      }, (error) => {
        console.log(error);
      });
    },
    

  }
}
