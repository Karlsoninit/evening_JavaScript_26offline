import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const BoxSize = styled.li`
  list-style: none;
  border: 1px solid tomato;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
});

export default function ProductCard({
  data,
  showSize,
  getCurrentProduct,
  inBasket,
  deleteBasketItem,
}) {
  const classes = useStyles();
  const [cardId, setcardId] = useState(0);

  const choose = () => {
    if (inBasket) {
      return (
        <BoxSize>
          <h2>{data.chooseSize}</h2>
        </BoxSize>
      );
    }
    return data.availableSizes.map((size, indx) => (
      <BoxSize
        key={indx}
        onClick={() => getCurrentProduct({ ...data, chooseSize: size })}
      >
        <h2>{size}</h2>
      </BoxSize>
    ));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", display: "flex" }}>
            {choose()}
          </div>
          <CardMedia
            className={classes.media}
            image={require(`../../../products/${data.sku}_1.jpg`)}
            title="Contemplative Reptile"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.style}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {data.price}
        </Button>
        {inBasket && (
          <Button
            size="small"
            color="primary"
            onClick={() => {
              deleteBasketItem(data.id);
              setcardId(data.id);
            }}
          >
            DELETE : {cardId}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
