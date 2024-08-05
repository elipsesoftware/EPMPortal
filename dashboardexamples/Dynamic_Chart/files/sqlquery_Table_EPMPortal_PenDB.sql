/****** Object:  Table [dbo].[PenDB_EPMPortal]    Script Date: 05/08/2024 09:46:15 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[PenDB_EPMPortal]') AND type in (N'U'))
DROP TABLE [dbo].[PenDB_EPMPortal]
GO

/****** Object:  Table [dbo].[PenDB_EPMPortal]    Script Date: 05/08/2024 09:46:15 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PenDB_EPMPortal](
	[TableType] [nchar](10) NULL,
	[GroupName] [nvarchar](50) NULL,
	[StartDateTime] [nchar](20) NULL,
	[EndDateTime] [nchar](20) NULL,
	[Pens] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


