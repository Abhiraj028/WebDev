
export function useDebounce(sec){
    timer = useRef()

    if(timer.current){
        clearTimeout(timer.current)
    }

    timer.current = setTimeout(runner,sec)

    function runner(){
    }
}