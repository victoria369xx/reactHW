
import {act, renderHook} from "@testing-library/react-hooks";
import { useRef } from "react";
import { Form } from "../Form";


describe("тестирую компонент-контейнер Form", ()=> {

    it("setMsgTxt меняет стейт значения text", ()=> {

    const {result} = renderHook(()=> Form())

    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: jest.fn().mockReturnValue({ chatId: 'fmfmfmdd12'}),
      }))
    
      jest.mock('react-redux', ()=> ({
          ...jest.requireActual('react-redux'),
          useDispatch: jest.fn().mockReturnValue({
              store: "store"
          })
      }))

      jest.fn(useRef)
      
    })
})