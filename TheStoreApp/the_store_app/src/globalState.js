import { useState, useEffect } from "react";

export const stateCart = createGlobalState({
  // Initial cart values
  cartItems: [], // List of items currently in the cart
  count: 0,      // Number of cartItems
  total: 0.0,    // Value of all items currently in the cart
});

function createGlobalState(initState = null) {
    const prototype = {
      data: { state: initState, reRenderFns: [] },
  
      get() {
        return this.data.state;
      },
  
      set(newState) {
        if (newState === this.data.state) return; //TODO: This is based on object equivelancy which may not be sufficient to detect state changes
        this.data.state = newState;
        this.data.reRenderFns.forEach((reRender) => reRender());
        return this;
      },
  
      joinReRender(reRender) {
        if (this.data.reRenderFns.includes(reRender)) return;
        this.data.reRenderFns.push(reRender);
      },
  
      cancelReRender(reRender) {
        this.data.reRenderFns = this.data.reRenderFns.filter(
          (reRenderFn) => reRenderFn !== reRender
        );
      },
    };
  
    return Object.freeze(Object.create(prototype));
  }
  
  // ##################################

  
  export function useGlobalState(globalState) {
    const [, set] = useState(globalState.get());
    const state = globalState.get();
    const reRender = () => set({});
  
    useEffect(() => {
      globalState.joinReRender(reRender);
      return () => {
        globalState.cancelReRender(reRender);
      };
    });
  
    function setState(newState) {
      globalState.set(newState);
    }
  
    return [state, setState];
  }