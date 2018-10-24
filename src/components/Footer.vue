<template>
    <footer class="bg-light">
        <div class="container text-center">
          <i class="far fa-copyright mr-1"></i><label>{{year}} - Lille 1</label>
          <span class="small font-italic infos">No cat has been hurt during the development of this app.</span>
        </div>
      </footer>
</template>

<script>
export default {
    data: function() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

