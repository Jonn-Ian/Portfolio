// assets/js/chart.js
import { db } from "./firebase.js";
import { doc, getDoc, updateDoc, increment } 
  from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// Chart.js defaults
Chart.defaults.color = "#fff";
Chart.defaults.font.family = "Poppins";

// Utility function to render a chart
function renderChart(canvasId, labels, data, label) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  new Chart(canvas.getContext("2d"), {
    type: "line",
    data: {
      labels,
      datasets: [{
        label,
        data,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.3
      }]
    }
  });
}

async function loadCharts() {
  try {
    const dailyRef   = doc(db, "ViewCounts", "CWMPAaxrKxZmaXKVdyg2", "views", "Daily");
    const monthlyRef = doc(db, "ViewCounts", "CWMPAaxrKxZmaXKVdyg2", "views", "monthly");
    const yearlyRef  = doc(db, "ViewCounts", "CWMPAaxrKxZmaXKVdyg2", "views", "yearly");

    const dailySnap   = await getDoc(dailyRef);
    const monthlySnap = await getDoc(monthlyRef);
    const yearlySnap  = await getDoc(yearlyRef);

    const dailyData   = dailySnap.exists() ? dailySnap.data() : {};
    const monthlyData = monthlySnap.exists() ? monthlySnap.data() : {};
    const yearlyData  = yearlySnap.exists() ? yearlySnap.data() : {};

    renderChart("viewsDay",
      ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
      [dailyData.sun, dailyData.mon, dailyData.tue, dailyData.wed, dailyData.thur, dailyData.fri, dailyData.sat],
      "Daily Views"
    );

    renderChart("viewsMonth",
      ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      [monthlyData.jan, monthlyData.feb, monthlyData.mar, monthlyData.apr, monthlyData.may, monthlyData.jun,
       monthlyData.jul, monthlyData.aug, monthlyData.sep, monthlyData.oct, monthlyData.nov, monthlyData.dec],
      "Monthly Views"
    );

    const years = Object.keys(yearlyData);
    const values = Object.values(yearlyData);
    renderChart("viewsYear", years, values, "Yearly Views");

    const total =
      Object.values(dailyData).reduce((a, b) => a + b, 0) +
      Object.values(monthlyData).reduce((a, b) => a + b, 0) +
      Object.values(yearlyData).reduce((a, b) => a + b, 0);

    const viewCountEl = document.getElementById("viewCount");
    if (viewCountEl) viewCountEl.textContent = total;
  } catch (err) {
    console.error("Error loading charts:", err);
  }
}

async function incrementCounters() {
  try {
    const now = new Date();
    const days = ["sun","mon","tue","wed","thur","fri","sat"];
    const months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    const year = now.getFullYear().toString();

    const dailyRef   = doc(db, "ViewCounts", "CWMPAaxrKxZmaXKVdyg2", "views", "Daily");
    const monthlyRef = doc(db, "ViewCounts", "CWMPAaxrKxZmaXKVdyg2", "views", "monthly");
    const yearlyRef  = doc(db, "ViewCounts", "CWMPAaxrKxZmaXKVdyg2", "views", "yearly");

    await updateDoc(dailyRef,   { [days[now.getDay()]]: increment(1) });
    await updateDoc(monthlyRef, { [months[now.getMonth()]]: increment(1) });
    await updateDoc(yearlyRef,  { [year]: increment(1) });

    console.log("Counters incremented successfully");
  } catch (err) {
    console.error("Error incrementing counters:", err);
  }
}

incrementCounters().then(loadCharts);