<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div 
    class="entry-container mb pointer p-2">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">26</span>
            <span class="mx-1 fs-5">Agosto</span>
            <span class="mx-2 fw-light">2023, Sabado</span>
        </div>

        <div class="entry-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda laudantium sunt numquam earum voluptates repudiandae, dignissimos eos, atque sed consectetur alias ad ut dolore iure? Tenetur molestiae consequuntur corrupti.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}

</style>