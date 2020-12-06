import React, { useState } from "react";

const Message = ({ message }) => (
    <tr>
        <td scope="col">{message.name}</td>
        <td scope="col">{message.email}</td>
        <td scope="col">{message.website}</td>
        <td scope="col">{message.comment}</td>
    </tr>
)

export default Message