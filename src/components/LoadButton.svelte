<script lang="ts">
    let { onclick, isLoading = false } = $props();
  </script>
  
  <button class="load-button" onclick={onclick} disabled={isLoading}>
      Load new card
  </button>
  
  <style lang="less">

    .load-button {
      padding: 20px 10px;
      font-size: 16px;
      font-weight: bold;
      color: white;
      background: var(--main-color);
      border: none;
      border-radius: var(--br-1);
      cursor: pointer;
      transition: background 0.3s ease, transform 0.1s ease;
      position: relative;
      overflow: hidden;
      min-width: 180px;
  
      &:hover {
        transform: scale(0.99);
      }
  
      &:active {
        transform: scale(0.95);
      }
  
      &:disabled {
        opacity: .5;
        cursor: not-allowed;
      }
    }
  </style>
  