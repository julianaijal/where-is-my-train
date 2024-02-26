import { type ReactElement, useEffect } from "react";
import {
  onCLS,
  onFCP,
  onFID,
  onINP,
  onLCP,
  type CLSMetricWithAttribution,
  type FCPMetricWithAttribution,
  type FIDMetricWithAttribution,
  type INPMetricWithAttribution,
  type LCPMetricWithAttribution,
} from "web-vitals/attribution";

type WebVitalsPropsType =
  | CLSMetricWithAttribution
  | FCPMetricWithAttribution
  | FIDMetricWithAttribution
  | INPMetricWithAttribution
  | LCPMetricWithAttribution;

  export const sendWebVitalsToDataLayer = (metric: WebVitalsPropsType): void => {
    const { name } = metric;
    (window as any).dataLayer?.push({
      event: 'web-vitals',
      name,
      metric,
    });
  };
  

const WebVitals = (): ReactElement => {
  useEffect(() => {
    onCLS(sendWebVitalsToDataLayer);
    onFCP(sendWebVitalsToDataLayer);
    onFID(sendWebVitalsToDataLayer);
    onINP(sendWebVitalsToDataLayer);
    onLCP(sendWebVitalsToDataLayer);
  }, []);

  return <></>;
};

export default WebVitals;
