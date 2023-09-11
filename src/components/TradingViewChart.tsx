import { useEffect } from 'react'
import { ResolutionString } from '../../public/charting_library/charting_library'

import datafeed from '@/utils/datafeed'

const chartingLibraryPath = '/charting_library/'

function TradingViewChart() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.TradingView) {
      new window.TradingView.widget({
        container: 'tv_chart_container',
        // autosize: true,
        locale: 'en',
        library_path: chartingLibraryPath,
        datafeed,
        // timeframe: 'Etc/UTC',
        symbol: 'BTCUSD',
        interval: '60' as ResolutionString,
        theme: 'Dark',
        fullscreen: true,
        disabled_features: [
          // gmx options
          'volume_force_overlay',
          'show_logo_on_all_charts',
          'caption_buttons_text_if_possible',
          'header_interval_dialog_button',
          'show_interval_dialog_on_key_press',
          // 'header_symbol_search',
          'popup_hints',
          'header_in_fullscreen_mode',
          'right_bar_stays_on_scroll',

          // default options
          // 'timeframes_toolbar',
          // 'header_compare',
          'header_settings',
          'show_hide_button_in_legend',
          'format_button_in_legend',
          'study_buttons_in_legend',
          'delete_button_in_legend',
          'symbol_info',
          'compare_symbol',
          'volume_force_overlay',
          'pane_context_menu',
          'scales_context_menu',
          'legend_context_menu',
          'main_series_scale_menu',

          'create_volume_indicator_by_default',
        ],
        favorites: {
          chartTypes: ['Bars', 'Candles', 'Area'],
          intervals: ['1', '30', '60'] as ResolutionString[],
        },
        enabled_features: [
          'side_toolbar_in_fullscreen_mode',
          'header_in_fullscreen_mode',
          // 'hide_left_toolbar_by_default',
        ],
        overrides: {
          volumePaneSize: 'medium',
          'paneProperties.legendProperties.showStudyArguments': false,
          'paneProperties.legendProperties.showStudyTitles': false,
          'paneProperties.legendProperties.showStudyValues': false,
          'paneProperties.legendProperties.showSeriesTitle': false,
          'scalesProperties.showStudyLastValue': false,

          'mainSeriesProperties.candleStyle.upColor': '#51B357',
          'mainSeriesProperties.candleStyle.downColor': '#FF4639',
          'mainSeriesProperties.candleStyle.borderUpColor': '#51B357',
          'mainSeriesProperties.candleStyle.borderDownColor': '#FF4639',
          'mainSeriesProperties.candleStyle.wickUpColor': '#51B357',
          'mainSeriesProperties.candleStyle.wickDownColor': '#FF4639',
        },
      })
    }
  }, [])

  return <div id="tv_chart_container" />
}

export default TradingViewChart
