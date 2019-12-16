import React from 'react'

import { List, ListItem, SeperatorItem, DateText, DescriptionText, CategoryText } from '.'

const DefaultList = () => {
  return (
    <List>
      <SeperatorItem>2014</SeperatorItem>
      <ListItem>
        <DateText>2014-11-13</DateText>
        <DescriptionText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nobis soluta repellendus sint nemo aliquam.
        </DescriptionText>
        <CategoryText>Category</CategoryText>
      </ListItem>
      <ListItem>
        <DateText>2014-11-12</DateText>
        <DescriptionText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nobis soluta repellendus sint nemo aliquam.
        </DescriptionText>
        <CategoryText>Category</CategoryText>
      </ListItem>
      <ListItem>
        <DateText>2014-11-11</DateText>
        <DescriptionText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nobis soluta repellendus sint nemo aliquam.
        </DescriptionText>
        <CategoryText>Category</CategoryText>
      </ListItem>
      <ListItem>
        <DateText>2014-11-10</DateText>
        <DescriptionText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nobis soluta repellendus sint nemo aliquam.
        </DescriptionText>
        <CategoryText>Category</CategoryText>
      </ListItem>
      <SeperatorItem>2013</SeperatorItem>
      <ListItem>
        <DateText>2013-11-19</DateText>
        <DescriptionText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nobis soluta repellendus sint nemo aliquam.
        </DescriptionText>
        <CategoryText>Category</CategoryText>
      </ListItem>
      <ListItem>
        <DateText>2013-11-18</DateText>
        <DescriptionText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nobis soluta repellendus sint nemo aliquam.
        </DescriptionText>
        <CategoryText>Category</CategoryText>
      </ListItem>
      <ListItem>
        <DateText>2013-11-17</DateText>
        <DescriptionText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nobis soluta repellendus sint nemo aliquam.
        </DescriptionText>
        <CategoryText>Category</CategoryText>
      </ListItem>
      <ListItem>
        <DateText>2013-11-16</DateText>
        <DescriptionText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nobis soluta repellendus sint nemo aliquam.
        </DescriptionText>
        <CategoryText>Category</CategoryText>
      </ListItem>
    </List>
  )
}

export { DefaultList }
