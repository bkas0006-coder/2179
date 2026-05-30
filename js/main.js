const embedOptions = {
  actions: false,
  renderer: "svg"
};

const charts = [
  ["#chart_monthly", "charts/01_monthly_losses_reports.vg.json"],
  ["#chart_top_loss", "charts/02_top_scam_types_loss.vg.json"],
  ["#chart_top_reports", "charts/03_top_scam_types_reports.vg.json"],
  ["#chart_bubble", "charts/04_scam_severity_bubble.vg.json"],
  ["#chart_contact", "charts/05_contact_methods.vg.json"],
  ["#chart_heatmap", "charts/06_age_scam_heatmap.vg.json"],
  ["#chart_map", "charts/07_state_map.vg.json"],
  ["#chart_state_ranking", "charts/08_state_ranking.vg.json"],
  ["#chart_abs_types", "charts/09_abs_fraud_types.vg.json"],
  ["#chart_abs_age", "charts/10_abs_scam_age.vg.json"],
  ["#chart_aic_help", "charts/11_aic_help_seeking.vg.json"],
  ["#chart_aic_harms", "charts/12_aic_harms_or_losses.vg.json"]
];

charts.forEach(([selector, file]) => {
  vegaEmbed(selector, file, embedOptions).catch(error => {
    console.error(`Error loading ${file}:`, error);
    const target = document.querySelector(selector);
    if (target) {
      target.innerHTML = `<p class="chart-error">Chart could not load. Check ${file} and the data path.</p>`;
    }
  });
});

window.addEventListener("scroll", () => {
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  document.getElementById("scrollProgress").style.width = `${progress}%`;
});