import { useSprings, animated } from "@react-spring/web";
import React, { useRef } from "react";
import { IProduct } from "../../../store/slices/products/productsSlice";
import { useDrag } from "@use-gesture/react";
import useMeasure from "react-use-measure";
import clamp from "lodash.clamp";

export const SwipeProduct = () => {
  const PRODUCTS_DATA: IProduct[] = [
    {
      name: "Product #1",
      _id: "1",
      categories: [],
      description: "",
      state: true,
      stock: 100,
    },
    {
      name: "Product #2",
      _id: "1",
      categories: [],
      description: "",
      state: true,
      stock: 100,
    },
    {
      name: "Product #3",
      _id: "1",
      categories: [],
      description: "",
      state: true,
      stock: 100,
    },
    {
      name: "Product #4",
      _id: "1",
      categories: [],
      description: "",
      state: true,
      stock: 100,
    },
    {
      name: "Product #5",
      _id: "1",
      categories: [],
      description: "",
      state: true,
      stock: 100,
    },
    {
      name: "Product #6",
      _id: "1",
      categories: [],
      description: "",
      state: true,
      stock: 100,
    },
  ];

  const index = useRef(0);
  const [ref, { width }] = useMeasure();
  const [props, api] = useSprings(
    PRODUCTS_DATA.length,
    (i) => ({
      x: i * width,
      scale: width === 0 ? 0 : 1,
      display: "block",
    }),
    [width]
  );

  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
      // When xDir == 1 is because swipe to left
      // When xDir == -1 is because swipe to right
      // When xDir == 0 is because no swipe movement

      if (active && distance[0] > width / 5) {
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          PRODUCTS_DATA.length - 1
        );
        cancel();
      }
      api.start((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * width + (active ? mx : 0);
        const scale = active ? 1 - distance[0] / width / 2 : 1;
        return { x, scale, display: "block" };
      });
    }
  );

  return (
    <div className="h-full flex items-center justify-center">
      <div ref={ref} className="w-full h-full">
        {props.map(({ x, display, scale }, i) => (
          <animated.div
            className="absolute w-full h-full touch-none will-change-transform"
            {...bind()}
            key={i}
            style={{ display, x, scale }}
          >
            <animated.div className="touch-none w-full h-full will-change-transform border-2 border-solid border-gray-400">
              {PRODUCTS_DATA[i].name}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};
