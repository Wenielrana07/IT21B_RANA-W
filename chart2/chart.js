class Chart{
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.barCtx = document.getElementById("barChart");
        this.pieCtx = document.getElementById("pieChart");
      }

      async fetchData() {
        try {
          const response = await fetch(this.dataUrl);
          if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
          }
          return await response.json();
        } catch (error) {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        }
      }
}