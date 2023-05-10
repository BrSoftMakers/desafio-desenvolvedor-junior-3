import { toast } from 'react-toastify';

export default class TostifyService {
  sucess(message: string) {
    toast.success(message, {
      icon: true,
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1000,
    });
  }

  error(message: string) {
    toast.error(message, {
      icon: true,
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1000,
    });
  }
}
