import * as React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Dialog, AppBar, Toolbar} from "@material-ui/core";
import { Button, CardActionArea, CardActions } from "@material-ui/core";
import DialogActions from '@mui/material/DialogActions';
/*import DialogContent from '@mui/material/DialogContent';*/
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from "@mui/material/Divider";

const ProfileCard = () => {
    const [open, setOpen] = React.useState(false);

    const [opendetails, setOpendetails] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpendetails = (scrollType) => () => {
        setOpendetails(true);
        setScroll(scrollType);
      };
    
      const handleClosedetails = () => {
        setOpendetails(false);
      };
    
      const descriptionElementRef = React.useRef(null);
      React.useEffect(() => {
        if (opendetails) {
          const { current: descriptionElement } = descriptionElementRef;
          if (descriptionElement !== null) {
            descriptionElement.focus();
          }
        }
      }, [opendetails]);



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (

        <Grid item lg={4} sm={6} md={6} xs={12} style={{ justifyContent: "center"}} >
            <Card style={{ maxWidth: "90vw", marginBottom: "1em", paddingBottom: "0.5em", marginLeft: "2vw", marginRight: "2vw", marginTop:"25px" }}>
                <CardActionArea onClick={handleClickOpen}>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png"
                        alt="image"
                    />
                    <CardContent style={{backgroundColor:"#D1D7E0"}}>
                        <Typography gutterBottom variant="h5" component="div" style={{marginBottom:"10px", color:"#2D283E"}}>
                            {"ABCD"}
                        </Typography>
                        <Typography variant="subtitle1" component="div" style={{color:"#2D283E"}}>{"ugyfy"}
                        </Typography>
                        <Typography variant='subtitle1' component="div" style={{color:"#2D283E"}}>
                          {"wiohie"}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{backgroundColor:"#D1D7E0"}}>
                    <div style={{flex: "1",
    flexDirection: 'row',
    justifyContent: 'space-between'}}>
                    <Button size="small" style={{backgroundColor:"#2D283E", color:"#D1D7E0",margin:"10px"}}  onClick={handleClickOpen}>
                        View Pass
                    </Button>
                    <Button size="small" style={{backgroundColor:"#2D283E", color:"#D1D7E0",margin:"10px"}} onClick={handleClickOpendetails('paper')}>
                        View Details
                    </Button>
                    </div>
                </CardActions>
                
            </Card>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar style={{ justifyContent: "space-between" }} >
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            View Pass
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Close
                        </Button>
                    </Toolbar>
                </AppBar>
                

            </Dialog>

            <Dialog
        open={opendetails}
        onClose={handleClosedetails}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" style={{textAlign: "center",backgroundColor:"#564F6f",padding:"15px",color:"#D1D7E0"}}>EVENT DETAILS</DialogTitle>
        <Divider />
        <DialogContentText ref={descriptionElementRef} tabIndex={-1} style={{backgroundColor:"#564F6f",padding:"15px",color:"#D1D7E0"}}>
            Event : {"iuuh"}
        </DialogContentText>
        <Divider />
        <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1} style={{backgroundColor:"#564F6f",padding:"15px",color:"#D1D7E0"}}>
            Description : {"uuhuh"}
        </DialogContentText>
        <Divider />
        <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1} style={{backgroundColor:"#564F6f",padding:"15px",color:"#D1D7E0"}}>
            Date : {"ojjjjjjjj"}
        </DialogContentText>
        <Divider />
        <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1} style={{backgroundColor:"#564F6f",padding:"15px",color:"#D1D7E0"}}>
            Time : {"pppppp"}
        </DialogContentText>
        <Divider />
        <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1} style={{backgroundColor:"#564F6f",padding:"15px",color:"#D1D7E0"}}>
            Venue : {"oooo"}
        </DialogContentText>
        <Divider />
        <DialogActions style={{backgroundColor:"#564F6f"}}>
          <Button onClick={handleClosedetails} style={{backgroundColor:"#2D283E", color:"#D1D7E0"}}>Close</Button>
        </DialogActions>
      </Dialog>
        </Grid>
    );
};
export default ProfileCard;
