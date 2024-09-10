<template>
    <li>
        <router-link
            class="nav-link"
            active-class="active emphasize"
            aria-current="page"
            :to="`/${index}`"
            :title="`This link goes to the ${page.link.text} page`"
        >{{ page.link.text }}</router-link>
    </li>
    
</template>

<script>
    export default {
        props: ['page', 'index'],
    }
</script>