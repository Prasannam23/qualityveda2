import React, { FC } from 'react'
import {Modal,Box} from "@mui/material";
import { Card } from '@/components/ui/card';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
  
    component: any;
    setRoute?: (route: string) => void;
    refetch?:any;
}

const CustomModal: FC<Props> = ({open,setOpen,setRoute,component:Component,refetch}) => {
  return (
    <Modal
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
     <Card className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[95%] m-auto  md:w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
        <Component setOpen={setOpen} setRoute={setRoute} refetch={refetch} />
      
      </Card>
    </Modal>
  )
}

export default CustomModal