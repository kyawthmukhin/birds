<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <button class="btn btn-dark mb-3" @click="backward">Backward</button>
                <img :src="require(`@/assets/${birdDesc.ImagePath}`)" alt="" height="300px">
            </div>
            <div class="col-md-6">
                <p>
                    {{birdDesc.BirdEnglishName}}
                </p>
                <p>
                    {{birdDesc.BirdMyanmarName}}
                </p>
                <p>
                    {{birdDesc.Description}}
                </p>
            </div>
        </div>      
    </div>
</template>

<script>
    export default {
        name: "BirdDescription",
        props: ['id'],
        methods: {
            backward() {
                this.$router.go(-1)
            }
        },
        computed: {
            birdDesc() {
                return this.$store.state.birdData.find(index => index.Id == this.id);
            }
        }
    }
</script>

<style scoped>

</style>