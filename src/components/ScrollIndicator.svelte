<div class="scroll-indicator">
  <div class="line"></div>
  <div class="arrow">↓</div>
  <div class="line"></div>
</div>

<style>
  .scroll-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    opacity: 0.5;
    width: 100%;
    max-width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  .line {
    flex: 1;
    max-width: 20vw;
    height: 1px;
    background-color: #3a4a5e;
  }

  .arrow {
    font-size: 1.5rem;
    color: #5a6a7e;
  }
</style>
