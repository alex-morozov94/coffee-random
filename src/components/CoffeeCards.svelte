<script lang="ts">
    import { tick } from "svelte";
    import CoffeeCard from "./CoffeeCard.svelte";
    import LoadButton from "./LoadButton.svelte";
    import Loader from "./Loader.svelte";

    interface Coffee {
      id: number;
      blend_name: string;
      origin: string;
      variety: string;
      notes: string;
      intensifier: string;
      imageUrl: string;
    }

    const INTERVAL_TIME = 30000;
    const ERROR_TEXT = "Something went wrong...";

    let coffees: Coffee[] = $state([]);
    let interval: ReturnType<typeof setTimeout> | null = null;
    let isLoading = $state(false);
    let errorText = $state("");

    const fetchCoffee = async (isUserTriggered = false) => {
      try {
        errorText = "";
        isLoading = true;
        const responce = await fetch("https://random-data-api.com/api/coffee/random_coffee");

        if (!responce.ok) {
          errorText = ERROR_TEXT;
          throw new Error("Error fetching coffee");
        }
        const data = await responce.json();

        const imageUrl = `https://loremflickr.com/500/500/coffee_bean?random=${data.id}`;

        coffees.push({ ...data, imageUrl });

        await tick();

        if (isUserTriggered) {
          scrollToBottom();
        }

        restartInterval();
      } catch (error) {
        console.error("Error fetching coffee:", error);
        errorText = ERROR_TEXT;
      } finally {
        isLoading = false;
      }
    }

    const restartInterval = () => {
      if (interval) {
        clearInterval(interval);
      }
      interval = setInterval(fetchCoffee, INTERVAL_TIME);
    }

    const scrollToBottom = () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };

    $effect(() => {
      fetchCoffee();
      restartInterval();
      return () => {
        if (interval) {
            clearInterval(interval);
        }
      };
    });
</script>

<div class="container">
  
  <div class="coffee-cards">
    {#each coffees as coffee (coffee.id)}
      <CoffeeCard {coffee} />
    {/each}
  </div>

  <LoadButton onclick={fetchCoffee} isLoading={isLoading} />

  {#if isLoading }
    <Loader />
  {/if}

  {#if errorText}
    <p class="error">{errorText}</p>
  {/if}
</div>

<style lang="less">
  @import "../variables.less"; 

  .container {
    text-align: center;
    padding: 20px;
  }

  .error {
    color: red;
    margin-top: 10px;
    font-size: 14px;
  }
</style>
