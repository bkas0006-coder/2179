const embedOptions = {
  actions: false,
  renderer: "svg"
};

vegaEmbed("#chart_monthly", "charts/01_monthly_losses_reports.vg.json", embedOptions);
vegaEmbed("#chart_top_loss", "charts/02_top_scam_types_loss.vg.json", embedOptions);
vegaEmbed("#chart_top_reports", "charts/03_top_scam_types_reports.vg.json", embedOptions);
vegaEmbed("#chart_bubble", "charts/04_scam_severity_bubble.vg.json", embedOptions);
vegaEmbed("#chart_contact", "charts/05_contact_methods.vg.json", embedOptions);
vegaEmbed("#chart_heatmap", "charts/06_age_scam_heatmap.vg.json", embedOptions);
vegaEmbed("#chart_map", "charts/07_state_map.vg.json", embedOptions);
vegaEmbed("#chart_state_ranking", "charts/08_state_ranking.vg.json", embedOptions);
vegaEmbed("#chart_abs_types", "charts/09_abs_fraud_types.vg.json", embedOptions);
vegaEmbed("#chart_abs_age", "charts/10_abs_scam_age.vg.json", embedOptions);
vegaEmbed("#chart_aic_help", "charts/11_aic_help_seeking.vg.json", embedOptions);
vegaEmbed("#chart_aic_harms", "charts/12_aic_harms_or_losses.vg.json", embedOptions);