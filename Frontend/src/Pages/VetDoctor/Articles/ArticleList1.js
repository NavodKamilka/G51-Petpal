import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function ArticleList1() {
  return (
    <div>
      {/* list of appointment box  */}
      <div
        style={{
          flexDirection: "row",
          display: "inline-flex",
          height: 120,
          margin: 10,
          width: "60%",
          verticalAlign: "center",
          position: "relative",
          top: "10%",
          left: "0%",
          flexWrap: "wrap",
          padding: "10px 20px",
          borderRadius: "27px",
          boxShadow: "0 2px 7px rgb(0 0 0 / 40%)",
          justifyContent: "center",
          spacing: "4",
        }}
      >
        {/* Box for time */}
        <Box
          style={{
            height: 40,
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
            fontSize: 15,
            textAlign: "center",
            margin: "10px 10px",
            width: "840px",
            flexDirection: "row",
            display: "inline-flex",
            position: "relative",
            top: "0%",
            left: "0%",
          }}
        >
          <Stack>
            <h2
              style={{
                width: "100%",
                display: "inline",
                marginRight: "80px",
                fontWeight: "bold",
                color: "#193498",
              }}
            >
              {" "}
              How to take care of a dog correctly{" "}
            </h2>{" "}
          </Stack>
          {/* button view more */}
          <Stack>
            <Button
              variant="contained"
              style={{
                display: "inline-block",
                width: "fit-content",
                margin: 10,
                position: "relative",
                top: "0%",
                left: "0%",
              }}
            >
              Read{" "}
            </Button>
          </Stack>
        </Box>
        {/* box for pet owner name */}
        <Box
          style={{
            width: window.width,
            height: 40,
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
            fontSize: 15,
            textAlign: "center",
            margin: "10px 10px",
            flexDirection: "row",
            display: "inline-flex",

            position: "relative",
            top: "0%",
            left: "0%",
          }}
        >
          <Stack>
            <h3
              style={{
                width: "100%",
                display: "inline",
                marginRight: "10px",
                fontWeight: "bold",
                color: "#193498",
              }}
            >
              {" "}
              Dr. Kasun Perera
            </h3>
          </Stack>

          {/* button view more */}
          <Stack>
            <Button
              variant="contained"
              style={{
                display: "inline-block",
                width: "fit-content",
                margin: 10,
                position: "relative",
                top: "0%",
                left: "0%",
              }}
            >
              More from Author
            </Button>
          </Stack>
        </Box>
      </div>
    </div>
  );
}
