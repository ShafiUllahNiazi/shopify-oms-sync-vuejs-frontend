<template>
<v-app>
    <router-view />
</v-app>
</template>

<style lang="scss">
html {
    font-size: 14px;
}

.v-main {
    padding: 60px 20px 90px !important;
}

.table-wrapper {
    &.no-pagination {
        .v-data-footer {
            display: none;
        }
    }

    .table-pagnation {
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .per-page {
            display: flex;
            align-items: center;

            span {
                padding-right: 10px;
            }

            .v-select {
                width: 65px;
            }
        }

        .pager {
            margin-left: 20px;
        }
    }
}

.v-list {
    .v-messages {
        display: none;
    }
}

.v-application {
    .v-chip {
        &.green {
            background-color: #c5e5c7 !important;

            .v-chip__content {
                color: #4caf50;
            }
        }
    }

    .v-btn {
        padding: 0 20px !important;
        border-radius: 2px;

        &.indigo {
            color: #ffffff;
        }
    }

    .v-label {
        font-size: 14px;
    }
}

.v-card {
    .v-card__actions {
        justify-content: flex-end;
    }
}

.v-dialog {
    .v-card__actions {
        padding: 10px 24px 16px;
    }
}
</style>

<script>
export default {
    name: 'App',

    components: {},

    data: () => ({
        //
    }),
};
</script>
