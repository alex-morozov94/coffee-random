<script lang="ts">
    import { fade } from "svelte/transition";
    import CoffeeImage from "./CoffeeImage.svelte";
    import Notes from "./Notes.svelte";

    const { coffee } = $props();

  </script>
  
  <div class="card" transition:fade>
    <CoffeeImage src={coffee.imageUrl} alt={coffee.blend_name} />
    <h2>{coffee.blend_name}</h2>
    <div><strong>Origin:</strong> {coffee.origin}</div>
    <div><strong>Variety:</strong> {coffee.variety}</div>
    <div><strong>Intensifier:</strong> {coffee.intensifier}</div>

    <Notes notes={coffee.notes} />

  </div>
  
  <style lang="less">
    @import "../variables.less";

    h2 {
      margin-bottom: 10px;
    }

    .card {
      max-width: 320px;
      margin: 0 auto 40px auto;
      padding: 20px;
      border-radius: @br-1;
      background: @secondary-color;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      color: #333;
    }
  </style>
  