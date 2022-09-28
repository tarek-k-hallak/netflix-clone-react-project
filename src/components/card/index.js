import React, { useState, useContext, createContext } from 'react';

import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Meta,
    Entities,
    Item,
    Image
} from './styles/card';

const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Card.Group = function CardGroup({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState(false);

    return (
        <FeatureContext.Provider
            value={{
                showFeature, setShowFeature,
                itemFeature, setItemFeature
            }}>
            <Group {...restProps}>{children} </Group>
        </FeatureContext.Provider>
    )
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>;
}

Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>;
}

Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);

    return (
        <Item
            onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
            }}
            item={item}
            {...restProps}
        >
            {children}
        </Item>
    );
}

Card.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />;
}

Card.Feature = function CardFeature({ children, category, section, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

    return section === itemFeature.genre && showFeature ? (
        <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <Group margin="2VW 0 5px 0" flexDirection="row" alignItems="center">
                    <FeatureTitle>{itemFeature.title}</FeatureTitle>
                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                </Group>

                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>

                {children}
            </Content>
        </Feature>
    ) : null;
};