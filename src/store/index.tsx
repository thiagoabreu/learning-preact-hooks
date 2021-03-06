import { h, createContext, PreactContext, FunctionalComponent } from '/web_modules/preact.js';
import { useReducer, useContext, Reducer } from '/web_modules/preact/hooks.js';

const initialState: StoreState = {
    content: {
        highlightId: undefined,
        details: {}
    }
};

export const StateContext: PreactContext<[StoreState, (actions: any) => void]> = createContext([] as any);

export const GlobalStateProvider: FunctionalComponent<{ reducers: Reducer<StoreState, StoreAction> }> = ({ reducers, children }) => (
    <StateContext.Provider value={useReducer(reducers, initialState)} >
        {children}
    </StateContext.Provider>
);

export const useGlobalState = () => useContext(StateContext);

