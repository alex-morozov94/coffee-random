<script lang="ts">
    import { fade } from "svelte/transition";
    import Loader from "./Loader.svelte";

    let { src, alt = "Coffee Image" } = $props();
  
    let isLoading = $state(true);
  </script>
  
  <div class="image-container" transition:fade> 
    {#if isLoading}
        <Loader />
    {/if}
    <img 
      src={src} 
      alt={alt} 
      class="coffee-image"
      style="display: {isLoading ? "none" : "block"};"
      onload={() => isLoading = false}
      onerror={() => isLoading = false}
    />
  </div>
  
  <style lang="less">
  .image-container {
      width: 100%;
      position: relative;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 300px;
    }
  
    .coffee-image {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
  </style>
  