const chartCanvas = document.createElement('canvas');
chartCanvas.id = 'FruitChart';
chartCanvas.width = 800;
chartCanvas.height = 400;
document.body.appendChild(chartCanvas);

const talentCategories = ['Melon', 'Apple', 'Mango', '', 'Strawberry'];
const talentData = {
    labels: talentCategories,
    datasets: [{
        label: 'Fruit Distribution',
        data: [25, 15, 30, 20, 10], 
        backgroundColor: [
            'rgba(255, 99, 71, 1)',  
            'rgba(30, 144, 255, 1)', 
            'rgba(255, 215, 0, 1)',   
            'rgba(60, 179, 113, 1)',  
            'rgba(138, 43, 226, 1)',
        ],
        hoverOffset: 4
    }]
};

const chartConfig = {
    type: 'pie',
    data: talentData,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Distribution of Talents',
                font: {
                    size: 24, 
                    weight: 'bold'
                }
            }
        }
    },
};

const chartScript = document.createElement('script');
chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
chartScript.onload = () => {
    const talentChart = new Chart(chartCanvas.getContext('2d'), chartConfig);
};
document.head.appendChild(chartScript);