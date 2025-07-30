import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { borderRadius, color, margin, padding } from '@mui/system';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: '#F1F5F9 ',
    border: '2px solid #000',
    boxShadow: 24,
    textTransform: 'none',
    borderRadius: 4,
    color: '#111827'
};

export default function BasicModal({ open, setOpen }) {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="grid grid-cols-2 overflow-hidden">
                    <div className="h-full">
                        <img src="image/ảnh modal.png" alt="login" className="h-full w-full object-cover" />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                        <h1 className="text-center text-3xl font-bold mb-4">Log in</h1>
                        <Typography variant="body2" color="gray">
                            If you do not have an account,{' '}
                            <Link href="#" underline="hover" sx={{ color: 'gold' }}>
                                register now
                            </Link>
                        </Typography>
                        <TextField label="Username/Email" variant="outlined" sx={{ my: 1, color: 'white' }} fullWidth />
                        <TextField label="Password" type="password" variant="outlined" sx={{ my: 1 }} fullWidth />
                        <Button
                            className="w-full !bg-yellow-300 text-black hover:!bg-green-400 mt-3 !text-black !font-bold !mt-5"
                            sx={{ textTransform: 'none' }}>
                            Log in
                        </Button >
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
