import React, { useEffect } from 'react';
import { onCLS, onFID, onLCP, onINP } from 'web-vitals/attribution';

declare var gtag: Function;

const WebVitals = () => {
  const sendToGoogleAnalytics = ({ name, delta, value, id, attribution }: any) => {
    if (typeof gtag === 'function') {
        type EventParamsCommon = {
          value: any;
          metric_id: any;
          metric_value: any;
          metric_delta: any;
        };

        type EventParamsDynamic = {
          debug_target?: any;
        };

        const eventParams: EventParamsCommon & EventParamsDynamic = {
            value: delta,
            metric_id: id,
            metric_value: value,
            metric_delta: delta,
        };
        
        switch (name) {
            case 'CLS':
                eventParams.debug_target = attribution.largestShiftTarget;
                break;
            case 'FID':
                eventParams.debug_target = attribution.eventTarget;
                break;
            case 'INP':
                    eventParams.debug_target = attribution.eventTarget;
                    break;
            case 'LCP':
                eventParams.debug_target = attribution.element;
                break;
        }
        
        gtag("event", name, eventParams);
    }
  };

  useEffect(() => {
    onCLS(sendToGoogleAnalytics);
    onFID(sendToGoogleAnalytics);
    onLCP(sendToGoogleAnalytics);
    onINP(sendToGoogleAnalytics);
    onCLS(console.log);
    onFID(console.log);
    onLCP(console.log);
    onINP(console.log);
  }, []); 

  return <script></script>;
};

export default WebVitals;
