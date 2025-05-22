// DOM loaded event for charts
document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts if charts containers exist
    initializeCharts();
});

function initializeCharts() {
    // Curriculum Match Score Chart
    const curriculumMatchCtx = document.getElementById('curriculum-match-chart');
    if (curriculumMatchCtx) {
        new Chart(curriculumMatchCtx, {
            type: 'bar',
            data: {
                labels: ['Kep. Pemerintahan', 'Digital Governance', 'Manajemen Publik', 'Kebijakan Publik', 'Etika ASN'],
                datasets: [{
                    label: 'Curriculum Match Score (%)',
                    data: [85, 72, 93, 68, 78],
                    backgroundColor: [
                        'rgba(41, 123, 255, 0.8)',
                        'rgba(41, 123, 255, 0.6)',
                        'rgba(41, 123, 255, 0.9)',
                        'rgba(41, 123, 255, 0.5)',
                        'rgba(41, 123, 255, 0.7)'
                    ],
                    borderColor: 'rgba(41, 123, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                }
            }
        });
    }

    // Lecture Feedback Trends Chart
    const feedbackTrendsCtx = document.getElementById('feedback-trends-chart');
    if (feedbackTrendsCtx) {
        new Chart(feedbackTrendsCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Content Quality',
                    data: [78, 81, 80, 85, 88, 90],
                    borderColor: 'rgba(41, 123, 255, 1)',
                    backgroundColor: 'rgba(41, 123, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Delivery',
                    data: [72, 75, 80, 82, 85, 89],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Applicability',
                    data: [65, 68, 74, 82, 85, 87],
                    borderColor: 'rgba(255, 206, 86, 1)',
                    backgroundColor: 'rgba(255, 206, 86, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 60,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                }
            }
        });
    }

    // Performance Analytics Chart
    const performanceCtx = document.getElementById('performance-analytics-chart');
    if (performanceCtx) {
        new Chart(performanceCtx, {
            type: 'radar',
            data: {
                labels: [
                    'Kepemimpinan',
                    'Komunikasi',
                    'Teknologi',
                    'Analisis Data',
                    'Manajemen',
                    'Inovasi'
                ],
                datasets: [{
                    label: 'Target Kompetensi',
                    data: [90, 85, 80, 85, 90, 85],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
                }, {
                    label: 'Pencapaian Rata-rata',
                    data: [75, 70, 65, 72, 78, 60],
                    borderColor: 'rgba(41, 123, 255, 1)',
                    backgroundColor: 'rgba(41, 123, 255, 0.2)',
                    pointBackgroundColor: 'rgba(41, 123, 255, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(41, 123, 255, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        pointLabels: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            backdropColor: 'transparent'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                }
            }
        });
    }

    // Analytics Distribution Chart
    const analyticsDistributionCtx = document.getElementById('analytics-distribution-chart');
    if (analyticsDistributionCtx) {
        new Chart(analyticsDistributionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Digital Skills', 'Leadership', 'Technical Knowledge', 'Soft Skills', 'Regulatory'],
                datasets: [{
                    data: [25, 20, 30, 15, 10],
                    backgroundColor: [
                        'rgba(41, 123, 255, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(153, 102, 255, 0.8)'
                    ],
                    borderColor: '#0D1117',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            padding: 20,
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });
    }

    // Completion Rate Chart
    const completionRateCtx = document.getElementById('completion-rate-chart');
    if (completionRateCtx) {
        new Chart(completionRateCtx, {
            type: 'bar',
            data: {
                labels: ['Digital Transformation', 'Public Service Ethics', 'Leadership', 'Data Analytics', 'Policy Development'],
                datasets: [{
                    label: 'Completion Rate (%)',
                    data: [92, 85, 78, 65, 88],
                    backgroundColor: 'rgba(41, 123, 255, 0.7)',
                    borderColor: 'rgba(41, 123, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                }
            }
        });
    }
}
