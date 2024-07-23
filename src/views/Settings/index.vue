<template>
<div>
    <Navbar />
    <v-main>
        <v-row>
            <v-col>
                <v-card class="order-verification" tile elevation="2">
                    <v-card-title>
                        Inventory Sync
                    </v-card-title>
                    <v-progress-linear :active="assets_loading" color="primary accent-4" indeterminate rounded></v-progress-linear>
                    <div v-if="assets_loading == false">
                        <v-card-text>
                            <v-card-text class="text--primary">
                                <div class="red--text"><b>Note:</b> This will take a while, depends on the SKU available shopify store</div><br />
                            </v-card-text>
                            <div class="instruction-bullets">
                                <p class="teal--text"><b>1.</b> It will update variant quantity on shopify store</p>
                                <p class="indigo--text"><br/></p>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" depressed @click="syncInventory()">Sync Inventory</v-btn>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-col>

            <v-col>
                <v-card class="order-verification" tile elevation="2">
                    <v-card-title>
                        Price Sync
                    </v-card-title>
                    <v-progress-linear :active="assets_loading" color="primary accent-4" indeterminate rounded></v-progress-linear>
                    <div v-if="assets_loading == false">
                        <v-card-text>
                            <v-card-text class="text--primary">
                                <div class="red--text"><b>Note:</b> This will take a while, depends on the SKU available shopify store</div><br />
                            </v-card-text>
                            <div class="instruction-bullets">
                                <p class="teal--text"><b>1.</b> Original Price Sync</p>
                                <p class="indigo--text"><b>2.</b> Discount Price Sync</p>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" depressed @click="syncPrice()">Sync Price</v-btn>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-col>

        </v-row>
        <!-- Snack Bar -->
        <v-snackbar v-model="snackbar" :timeout="snackbar_timeout">
            {{ snackbar_text }}
            <template v-slot:action="{ attrs }">
                <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-main>
   
</div>
</template>

<style lang="scss" src="./Settings.scss"></style>

<script src="./Settings.js"></script>
