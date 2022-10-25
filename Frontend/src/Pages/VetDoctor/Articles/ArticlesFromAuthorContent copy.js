import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import SearchBar from "../../../Components/SearchBar";
import ArticleListForAuthor from "./ArticleListForAuthor copy";

const filterByDate = [
  { title: "Latest published" },
  { title: "Latest published" },
];

const filterByLikes = [{ title: "High rated" }, { title: "Low rated" }];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F3F3F3",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 1230,
  top: 10,
}));

export default function ArticlesFromAuthorContent() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
            <div>
                <SearchBar />
              </div>
              <div
                style={{
                  flexDirection: "row",
                  display: "inline-flex",
                  height: 55,
                  margin: 10,
                  width: window.width,
                  verticalAlign: "center",
                  position: "relative",
                  top: "2%",
                  left: "0%",
                }}
              >
                {/* <Stack
                  style={{
                    position: "relative",
                    top: "0%",
                    left: "0%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Avatar
                    style={{ width: "80px", height: "80px" }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                  />
                </Stack> */}
                {/* doc name */}
                <div
                  style={{
                    width: window.width,
                    textAlign: "center",
                    position: "relative",
                    top: "30%",
                    left: "20%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <h1
                    style={{
                      width: "50%",
                      display: "inline",
                      marginRight: "100px",
                      fontWeight: "bold",
                      color: "#193498",
                    }}
                  >
                    {" "}
                    Dr. Damith Dharmasiri{" "}
                  </h1>
                </div>

                <div
                  style={{
                    width: window.width,
                    textAlign: "center",
                    position: "relative",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <p
                    style={{
                      width: "70%",
                      display: "inline",
                      marginRight: "100px",
                      fontSize: "200%",
                      color: "#000000",
                    }}
                  >
                    {" "}
                    Articles | 3{" "}
                  </p>
                </div>
              </div>

             

              {/* <div
                style={{
                  flexDirection: "row",
                  display: "inline-flex",
                  height: 55,
                  margin: 10,
                  width: window.width,
                  verticalAlign: "center",
                  position: "relative",
                  top: "5%",
                  left: "0%",
                }}
              >
               <hr/>
               
              </div> */}

              {/* artcle list */}
              <div style={{ position: "relative", top: "5%", left: "0%" }}>
                <ArticleListForAuthor />
        
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

