import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
const Modal = forwardRef(({ children, btnCaption }, ref) => {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md w-96">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <button>
                    {btnCaption}
                </button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
})

export default Modal;