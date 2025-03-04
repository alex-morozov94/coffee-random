<script lang="ts">
    const { notes } = $props();
    const noteList: string[] = notes.split(", ");
  </script>
  
  <div class="notes-container">
    <div class="notes">
      {#each noteList as note}
        <span class="tag">{note}</span>
      {/each}
    </div>
  </div>
  
  <style lang="less">
    @import "../variables.less"; 

    .notes-container {
      width: 100%;
      overflow-x: auto;
      margin-top: 20px;
    }
  
    .notes {
      display: flex;
      gap: 5px;
      white-space: nowrap;
      padding-bottom: 5px;
    }
  
    .tag {
      display: inline-block;
      background: @main-color;
      color: white;
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
    }
  </style>
  