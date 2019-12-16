import React from 'react'

import { List, ListItem, SeperatorItem, Col, Text } from '.'

const DefaultList = () => {
  return (
    <List>
      <SeperatorItem>2014</SeperatorItem>
      <ListItem>
        <Col>
          <Text>2014-11-13</Text>
        </Col>
        <Col stretched ellipsis>
          <Text grey>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nobis soluta repellendus sint nemo aliquam.</Text>
        </Col>
        <Col>
          <Text blue>Category</Text>
        </Col>
      </ListItem>
    </List>
  )
}

const SingleColumn = () => {
  return (
    <List>
      <SeperatorItem>2014</SeperatorItem>
      <ListItem>
        <Col stretched ellipsis>
          <Text grey>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nobis soluta repellendus sint nemo aliquam.</Text>
        </Col>
      </ListItem>
    </List>
  )
}

const EndColumn = () => {
  return (
    <List>
      <SeperatorItem>2014</SeperatorItem>
      <ListItem>
        <Col stretched></Col>
        <Col>
          <Text blue>End Column</Text>
        </Col>
      </ListItem>
    </List>
  )
}

export { DefaultList, SingleColumn, EndColumn }
