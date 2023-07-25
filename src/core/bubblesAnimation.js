import * as d3 from 'd3';
import {throttle} from 'lodash';

const K = 0.4;

const timers = {};
const initCoords = new Map();
const bubbleContainer = d3.select('#bubbleContaining');
const {left: parentLeft, top: parentTop} = bubbleContainer.node().getBoundingClientRect();

bubbleContainer
    .selectAll('.animated-bubble')
    .on('mousemove', throttle(e => {
        const el = e.target;
        const {left, top, width, height} = el.getBoundingClientRect();


        if (!initCoords.has(el.id)) {
            initCoords.set(el.id, {left, top})
        }

        const x1 = left + width / 2;
        const y1 = top + height / 2;

        const dxSign = Math.sign(x1 - e.clientX);
        const dySign = Math.sign(y1 - e.clientY);

        const offsetX = dxSign * (K * width / 2);
        const offsetY = dySign * (K * height / 2);

        el.style.left = `${left - parentLeft + offsetX }px`;
        el.style.top = `${top - parentTop + offsetY}px`;
    }, 34))
    .on('mouseenter', ({target}) => clearTimeout(timers[target.id]))
    .on('mouseleave', ({target: t}) => {
        const {left, top} = initCoords.get(t.id);

        timers[t.id] = setTimeout(() => {
            t.style.left = `${left - parentLeft}px`;
            t.style.top = `${top - parentTop}px`;
        }, 1000);
    });
